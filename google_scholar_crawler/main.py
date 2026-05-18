"""
Fetch per-paper citation counts and the profile-level total from Semantic Scholar.
Outputs results/citations.json, which is committed to the google-scholar-stats branch
by the GitHub Actions workflow and consumed by the React site on page load.

Semantic Scholar is a free official API — no scraping, no IP blocks.
Author is found by name + Aalto affiliation match, then full paper list is fetched.
"""

import json
import os
import re
import time
from datetime import datetime, timezone

import requests

API = "https://api.semanticscholar.org/graph/v1"
HEADERS = {"User-Agent": "gdongmei-portfolio-citation-bot/1.0"}


def normalize(title: str) -> str:
    return re.sub(r"\s+", " ", title.lower()).strip()


def find_author_id() -> str:
    """Find the Semantic Scholar author ID for Dongmei Gao at Aalto."""
    resp = requests.get(
        f"{API}/author/search",
        params={
            "query": "Dongmei Gao",
            "fields": "authorId,name,affiliations,citationCount",
            "limit": 20,
        },
        headers=HEADERS,
        timeout=30,
    )
    resp.raise_for_status()

    for author in resp.json().get("data", []):
        affiliations = [a.get("name", "").lower() for a in author.get("affiliations", [])]
        if any("aalto" in aff for aff in affiliations):
            print(f"Found author: {author['name']} (S2 ID: {author['authorId']})")
            return author["authorId"]

    # Fallback: paper-title search to identify the author
    time.sleep(1)
    resp = requests.get(
        f"{API}/paper/search",
        params={
            "query": "Episodic Experience Low-code Development Platform End-user Developers",
            "fields": "title,authors",
            "limit": 5,
        },
        headers=HEADERS,
        timeout=30,
    )
    resp.raise_for_status()
    for paper in resp.json().get("data", []):
        for author in paper.get("authors", []):
            if "gao" in author["name"].lower():
                print(f"Found author via paper: {author['name']} (S2 ID: {author['authorId']})")
                return author["authorId"]

    raise RuntimeError("Could not locate author on Semantic Scholar")


def main():
    author_id = find_author_id()

    time.sleep(1)
    resp = requests.get(
        f"{API}/author/{author_id}",
        params={"fields": "citationCount,papers.title,papers.citationCount,papers.year"},
        headers=HEADERS,
        timeout=30,
    )
    resp.raise_for_status()
    data = resp.json()

    total_citations = data.get("citationCount", 0)
    print(f"Total citations: {total_citations}")

    papers = []
    for pub in data.get("papers", []):
        title = pub.get("title", "")
        cites = pub.get("citationCount", 0)
        year = str(pub.get("year", ""))
        print(f"  [{year}] {title}: {cites}")
        papers.append(
            {
                "title": title,
                "title_key": normalize(title),
                "year": year,
                "cites": cites,
            }
        )

    result = {
        "total_citations": total_citations,
        "papers": papers,
        "updated": datetime.now(timezone.utc).isoformat(),
    }

    os.makedirs("results", exist_ok=True)
    with open("results/citations.json", "w") as f:
        json.dump(result, f, indent=2)
    print("Saved results/citations.json")


if __name__ == "__main__":
    main()
