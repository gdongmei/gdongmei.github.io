"""
Fetch per-paper citation counts and the profile-level total from Google Scholar.
Outputs results/citations.json, which is committed to the google-scholar-stats branch
by the GitHub Actions workflow and consumed by the React site on page load.

Total citations (author['citedby']) already includes every paper in the Scholar
profile — including papers not displayed on the website (e.g. master's thesis) —
so no additional summing is needed.
"""

import json
import os
import re
from datetime import datetime, timezone

from scholarly import scholarly


def normalize(title: str) -> str:
    return re.sub(r"\s+", " ", title.lower()).strip()


def main():
    scholar_id = os.environ.get("GOOGLE_SCHOLAR_ID", "")
    if not scholar_id:
        raise ValueError("GOOGLE_SCHOLAR_ID environment variable is not set")

    print(f"Fetching profile: {scholar_id}")
    author = scholarly.search_author_id(scholar_id)
    author = scholarly.fill(author, sections=["basics", "publications"])

    total_citations = author.get("citedby", 0)
    print(f"Total citations (all papers): {total_citations}")

    papers = []
    for pub in author.get("publications", []):
        filled = scholarly.fill(pub)
        title = filled["bib"].get("title", "")
        cites = filled.get("num_citations", 0)
        year = filled["bib"].get("pub_year", "")
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
