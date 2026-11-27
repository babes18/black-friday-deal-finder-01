# DealHunt 2026 — Real Black Friday & Cyber Monday Deal Finder

[![Bounty](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01)
[![Rank](https://make.fun/badge/black-friday-deal-finder-01/babes18/black-friday-deal-finder-01/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01)
[![Reward](https://make.fun/badge/black-friday-deal-finder-01/babes18/black-friday-deal-finder-01/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01)

A static Black Friday / Cyber Monday deal finder with **24 real deals** from Amazon, Best Buy, Walmart and Target — every price checked by hand at the store on **27 Nov 2026**, with sale price, usual price, saving, discount %, verdict and source shown on every card. No invented deals, no stale prices.

## What it does

- **Deal grid** — 24 verified deals with big legible prices, discount badges, store names and "checked" timestamps.
- **Search + filters** — live search, category chips (Audio, TVs, Laptops, Wearables, Home, Gaming, Tablets, Storage), store filter, minimum-discount filter, and sorting by biggest % off, biggest $ saving, or price.
- **Deal verdict** — HOT (40%+ off), GOOD (25–39%), OK (15–24%), computed from the store's own prices; a "★ Lowest ever" ribbon appears only where a price tracker or deal source says the price is the lowest ever recorded.
- **Deal detail pages** — full savings maths, check time, source, store link, and related deals in the same category.
- **Stats strip** — deal count, average discount, biggest saving, total savings and stores covered, all computed from the same data the cards show, so the numbers always agree.
- **Cyber Monday countdown** — live countdown to the end of Cyber Monday, Mon 30 Nov 2026.
- **Phone layout** — single-column grid, sticky header collapses to brand only.

## Verification

Every deal lists its source (store product page or a dated deals report naming the store) and the UTC time it was checked on 27 Nov 2026. Three prices moved during verification and were corrected to the fresh price instead of the brief's figure:

- MacBook Air 13" M5: $989.10 on 23 Nov → **$999.99** on 26 Nov (Silver/Starlight; Midnight $1,049).
- Dyson V9 Motorbar: listed $270 → exact Amazon price **$269.95**.
- Dyson Airwrap i.d.: $499 / $650 → **$499.99 / $649.99**.

## Running

```sh
node serve.ts
```

Then open http://localhost:8080 — a static HTML/CSS/JS site, no build step, no framework, no network requests. Store links are plain `<a href>` links out; nothing else loads from the network.

## Structure

- `app/index.html` — page shell + header, nav, footer
- `app/data.js` — all 24 deals + price/verdict/stats helpers (single source of truth)
- `app/views.js` — cover grid, category view, deal detail view
- `app/main.js` — hash router + search/filter/sort state + countdown
- `app/style.css` — dark premium theme, amber accent, responsive
- `main.ts` — hand-in program (copies `app/` + `screenshots/`, writes `dossier.json`)
- `vendor/makefun-frontend.ts` — make.fun library from the kit, unchanged
- `shots.json` — the 4 screenshot routes (cover, deal detail, category filter, phone)

Built for the make.fun bounty [Build the best real Black Friday deal finder](https://make.fun/bounty/black-friday-deal-finder-01).
