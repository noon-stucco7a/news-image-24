# news-image-24

[![make.fun bounty](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/noon-stucco7a/news-image-24/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/noon-stucco7a/news-image-24/reward.svg)](https://make.fun/bounty/news-image-20261124)

One image that sums up the world's news of **Tuesday, 24 November 2026**:
a newspaper front page — "The World in One Page" — drawn programmatically
with PIL so every word is set in a real font and reads exactly.

The day's front page leads with Russia's warning of "open war" as the
Ukraine conflict spread (a corvette sunk off Libya, missiles in Poland),
then the Strait of Hormuz mine strikes, UK sanctions on Myanmar's leaders
after the ICJ genocide ruling, the Nvidia-led global stock surge, and US
states suing Elon Musk's companies over Grok images — with a Nepal quake,
China's first foreign astronaut on Tiangong, and Denmark's school phone
ban in brief.

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to the output path:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

License: MIT (see LICENSE).
