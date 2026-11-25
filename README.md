# News Image — 2026-11-24 Front Page

[![Competition](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![Rank](https://make.fun/badge/news-image-20261124/noon-stucco7a/news-image-24/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![Reward](https://make.fun/badge/news-image-20261124/noon-stucco7a/news-image-24/reward.svg)](https://make.fun/bounty/news-image-20261124)

## About

This repository holds an entry for the make.fun news image bounty dated
2026-11-24. When the program runs, it delivers a pre-composed newspaper
front page — a single 1024×1024 PNG that sums up the day's world news at
a glance — by writing it to `/output/entry.png`.

The artwork was typeset ahead of time in a classic broadsheet style:
a nameplate masthead, heavy display type for the lead story, and narrow
columns for the supporting items, all on a clean off-white page.

## Running it

The entry point is `main.ts` (TypeScript). Executing it copies the
`entry.png` file that ships alongside the source into the output
directory, so the finished image lands at `/output/entry.png`.

- Default output directory: `/output`
- Override: the output directory can be changed through an environment
  variable when a different destination is needed; the image is still
  written under the same `entry.png` name.

No network access, external services, or extra assets are required at
runtime; the picture itself is bundled with the code.

## What is on the page

The front page is arranged like the top half of a traditional daily
newspaper:

- **Masthead** — the paper's nameplate across the very top of the page.
- **Big date line** — the full date for 2026-11-24, spelled out with
  its weekday, set large directly under the masthead.
- **Headline** — one dominant lead story in the largest type on the
  page, carrying the day's most consequential development.
- **Four secondary stories** — a row of smaller headlines beneath the
  lead, each with a short standfirst covering other major events of
  the day.
- **IN BRIEF strip** — a compact band of one-line news briefs along
  the bottom, rounding up the remaining stories in telegram style.

## Notes

The image is a fixed composition for one specific day — 2026-11-24 —
rather than something generated on the fly, so every run produces
exactly the same front page, byte for byte. That determinism is
deliberate: the entry is judged on how well a single still image
captures that day's news, and a frozen layout keeps the result
identical no matter where or when the program is executed.
