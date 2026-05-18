"""
Fetch per-paper citation counts and the profile-level total from Semantic Scholar.
Outputs results/citations.json, committed to the google-scholar-stats branch.

On first run the script discovers the author ID and prints it — set S2_AUTHOR_ID
as a GitHub Actions secret to skip the discovery step on all future runs.
"""

import json
import os
import re
import time
from datetime import datetime, timezone

import requests

API = "https://api.semanticscholar.org/graph/v1"
HEADERS = {"User-Agent": "gdongmei-portfolio-citation-bot/1.0"}

# A distinctive paper title used to locate the author when S2_AUTHOR_ID is not set.
KNOWN_PAPER = "Measuring End-user Developers' Episodic Experience of a Low-code Development Platform"


def normalize(title: str) -> str:
    return re.sub(r"\s+", " ", title.lower()).strip()


def s2_get(url: str, params: dict) -> dict:
    """GET with automatic retry on HTTP 429."""
    for attempt, wait in enumerate([0, 30, 90]):
        if wait:
            print(f"Rate limited by Semantic Scholar, retrying in {wait}s (attempt {attempt + 1}/3)...")
            time.sleep(wait)
        resp = requests.get(url, params=params, headers=HEADERS, timeout=30)
        if resp.status_code != 429:
            resp.raise_for_status()
            return resp.json()
    raise RuntimeError("Semantic Scholar rate limit persists after retries. Try again later.")


def find_author_id() -> str:
    # Fast path: use the cached ID from a previous run.
    cached = os.environ.get("S2_AUTHOR_ID", "").strip()
    if cached:
        print(f"Using S2_AUTHOR_ID from environment: {cached}")
        return cached

    # Slow path: look up the author via a known paper title.
    print(f"Searching Semantic Scholar for paper: {KNOWN_PAPER}")
    data = s2_get(
        f"{API}/paper/search",
        {"query": KNOWN_PAPER, "fields": "title,authors", "limit": 5},
    )
    for paper in data.get("data", []):
        if normalize(paper.get("title", "")) == normalize(KNOWN_PAPER):
            for author in paper.get("authors", []):
                if "gao" in author.get("name", "").lower():
                    author_id = author["authorId"]
                    print(f"Found author: {author['name']} (S2 ID: {author_id})")
                    print(
                        f"\n*** ACTION REQUIRED: add S2_AUTHOR_ID={author_id} as a GitHub "
                        f"Actions secret to skip this search on future runs. ***\n"
                    )
                    return author_id

    raise RuntimeError(
        f"Could not find '{KNOWN_PAPER}' on Semantic Scholar. "
        "Set S2_AUTHOR_ID as a GitHub Actions secret if you know your author ID."
    )


def main():
    author_id = find_author_id()

    time.sleep(1)
    data = s2_get(
        f"{API}/author/{author_id}",
        {"fields": "citationCount,papers.title,papers.citationCount,papers.year"},
    )

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
