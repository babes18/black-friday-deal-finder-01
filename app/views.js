// views.js — renders every screen of DealHunt 2026 from data.js.
// No network loads: category art is inline SVG, prices come from DEALS only.

import { DEALS, CATEGORIES, STORES, saving, pctOff, verdict, money, stats, checkedLabel } from "./data.js";

// ---- small inline SVG marks, one per category (drawn, not downloaded) ----
const ICONS = {
  Audio:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13a8 8 0 0 1 16 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="2.5" y="13" width="4.5" height="7" rx="2" fill="currentColor"/><rect x="17" y="13" width="4.5" height="7" rx="2" fill="currentColor"/></svg>',
  TVs:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="12.5" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 21h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  Laptops:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="10.5" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2.5 18.5h19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  Wearables:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="6.5" width="10" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 3.5h4M10 20.5h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  Home:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11.5 12 4l8.5 7.5V20a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  Gaming:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8h10a5 5 0 0 1 4.9 6l-.7 3.2a3 3 0 0 1-5.6 1.2L14.5 16h-5l-1.1 2.4a3 3 0 0 1-5.6-1.2L2.1 14A5 5 0 0 1 7 8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 11v3M6.5 12.5h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="15.8" cy="11.6" r=".9" fill="currentColor"/><circle cx="17.8" cy="13.4" r=".9" fill="currentColor"/></svg>',
  Tablets:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.5 17.8h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  Storage:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 12h.01M11 12h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function verdictBadge(deal) {
  const v = verdict(deal);
  return `<span class="verdict verdict-${v.toLowerCase()}" title="Deal verdict: ${v}">${v}</span>`;
}

export function dealCard(deal) {
  const p = pctOff(deal);
  const ribbon = deal.lowestEver
    ? `<span class="ribbon">★ Lowest ever</span>`
    : "";
  return `
  <article class="card">
    <div class="card-top">
      <span class="card-icon">${ICONS[deal.category] || ""}</span>
      <span class="off-badge">−${p}%</span>
      ${ribbon}
    </div>
    <h3 class="card-title"><a href="#/deal/${deal.id}">${esc(deal.title)}</a></h3>
    <p class="card-blurb">${esc(deal.blurb)}</p>
    <p class="card-store">${esc(deal.store)} · ${esc(deal.category)}</p>
    <p class="card-price">${money(deal.price)} <span class="was">${money(deal.was)}</span></p>
    <p class="card-save">You save ${money(saving(deal))} (${p}% off) ${verdictBadge(deal)}</p>
    <p class="card-checked">Checked ${checkedLabel(deal.checked)}</p>
    <div class="card-actions">
      <a class="btn-store" href="${esc(deal.url)}" target="_blank" rel="noopener">Shop at ${esc(deal.store)} ↗</a>
      <a class="btn-detail" href="#/deal/${deal.id}">View deal →</a>
    </div>
  </article>`;
}

// ---- cover: hero + stats + filters + grid ----
export function coverView(state) {
  const s = stats();
  const filtered = applyFilters(state);
  const chips = ["All", ...CATEGORIES]
    .map(
      (c) =>
        `<button class="chip${state.category === c ? " active" : ""}" data-category="${esc(c)}">${esc(c)}</button>`,
    )
    .join("");
  const storeOptions = ["All stores", ...STORES]
    .map(
      (st) =>
        `<option value="${esc(st)}"${state.store === st ? " selected" : ""}>${esc(st)}</option>`,
    )
    .join("");
  const discOptions = [
    ["0", "Any discount"],
    ["25", "25% off or more"],
    ["40", "40% off or more"],
    ["50", "50% off or more"],
  ]
    .map(
      ([v, label]) =>
        `<option value="${v}"${String(state.minOff) === v ? " selected" : ""}>${label}</option>`,
    )
    .join("");
  const sortOptions = [
    ["pct", "Biggest % off"],
    ["saving", "Biggest $ saving"],
    ["low", "Price: low to high"],
    ["high", "Price: high to low"],
  ]
    .map(
      ([v, label]) =>
        `<option value="${v}"${state.sort === v ? " selected" : ""}>${label}</option>`,
    )
    .join("");

  const grid = filtered.length
    ? filtered.map(dealCard).join("")
    : `<p class="empty">No deals match those filters. <button class="linklike" data-action="clear-filters">Clear filters</button></p>`;

  return `
  <section class="hero">
    <p class="eyebrow">BLACK FRIDAY · CYBER MONDAY · 27–30 NOV 2026</p>
    <h1>Real Black Friday deals,<br>checked by hand <span class="accent">today</span>.</h1>
    <p class="hero-sub">Every price below was read at the store on 27 Nov 2026 — sale price, usual price, saving and source, all shown. No invented deals, no stale prices.</p>
    <div class="stats" role="list">
      <div class="stat" role="listitem"><span class="stat-num">${s.total}</span><span class="stat-label">verified deals</span></div>
      <div class="stat" role="listitem"><span class="stat-num">${s.avgPct}%</span><span class="stat-label">average discount</span></div>
      <div class="stat" role="listitem"><span class="stat-num">${money(s.biggestSaving)}</span><span class="stat-label">biggest single saving</span></div>
      <div class="stat" role="listitem"><span class="stat-num">${money(s.totalSaving)}</span><span class="stat-label">total savings on this page</span></div>
      <div class="stat" role="listitem"><span class="stat-num">${s.stores}</span><span class="stat-label">stores covered</span></div>
      <div class="stat" role="listitem"><span class="stat-num">${s.hottest}</span><span class="stat-label">HOT deals (40%+ off)</span></div>
    </div>
    <p class="hero-note">All prices checked 27 Nov 2026 · Cyber Monday ends Mon 30 Nov · <span id="countdown"></span></p>
  </section>

  <section class="filters" aria-label="Find a deal">
    <input id="search" type="search" placeholder="Search deals or stores — try “AirPods”, “TV”, “Dyson”…" value="${esc(state.q)}" aria-label="Search deals">
    <div class="chips" role="group" aria-label="Category">${chips}</div>
    <div class="filter-row">
      <label>Store <select id="store-filter">${storeOptions}</select></label>
      <label>Discount <select id="disc-filter">${discOptions}</select></label>
      <label>Sort by <select id="sort">${sortOptions}</select></label>
      <span class="count">${filtered.length} of ${DEALS.length} deals</span>
    </div>
  </section>

  <section class="grid" aria-label="Deals">${grid}</section>

  <section class="how">
    <h2>How to read a deal here</h2>
    <ol>
      <li><strong>HOT</strong> means 40% off or more, <strong>GOOD</strong> 25–39%, <strong>OK</strong> 15–24% — computed from the store's own prices, not claimed.</li>
      <li><strong>★ Lowest ever</strong> appears only when a price tracker or deal source says this is the lowest price ever recorded for that product.</li>
      <li>Every card shows <strong>when the price was checked</strong> and <strong>where it was read</strong>. Click through to the store and confirm before you buy — prices move fast on Black Friday.</li>
    </ol>
  </section>`;
}

// ---- category view: same grid, pre-filtered, its own heading ----
export function categoryView(category, state) {
  const list = DEALS.filter((d) => d.category === category);
  const s = stats();
  const sorted = [...list].sort((a, b) => pctOff(b) - pctOff(a));
  const biggest = sorted[0];
  return `
  <section class="cat-hero">
    <p class="eyebrow"><a href="#/">All deals</a> / ${esc(category)}</p>
    <h1>${esc(category)} deals <span class="accent">— ${list.length} verified</span></h1>
    <p class="hero-sub">Best ${esc(category.toLowerCase())} saving on this page: <strong>${esc(biggest.title)}</strong> — ${money(biggest.price)} (was ${money(biggest.was)}, save ${money(saving(biggest))}). Average discount across all ${s.total} deals is ${s.avgPct}%.</p>
    <div class="chips" role="group" aria-label="Category">
      ${["All", ...CATEGORIES]
        .map(
          (c) =>
            `<a class="chip${c === category ? " active" : ""}" href="${c === "All" ? "#/" : "#/category/" + encodeURIComponent(c.toLowerCase())}">${esc(c)}</a>`,
        )
        .join("")}
    </div>
  </section>
  <section class="grid" aria-label="${esc(category)} deals">${sorted.map(dealCard).join("")}</section>`;
}

// ---- detail view: one deal, full maths, related deals ----
export function detailView(deal) {
  const p = pctOff(deal);
  const related = DEALS.filter((d) => d.category === deal.category && d.id !== deal.id)
    .sort((a, b) => pctOff(b) - pctOff(a))
    .slice(0, 3);
  return `
  <section class="detail">
    <p class="eyebrow"><a href="#/">All deals</a> / <a href="#/category/${encodeURIComponent(deal.category.toLowerCase())}">${esc(deal.category)}</a></p>
    <div class="detail-grid">
      <div class="detail-art">
        <span class="detail-icon">${ICONS[deal.category] || ""}</span>
        <span class="off-badge big">−${p}%</span>
        ${deal.lowestEver ? `<span class="ribbon big">★ Lowest ever</span>` : ""}
      </div>
      <div class="detail-info">
        <h1>${esc(deal.title)}</h1>
        <p class="detail-store">${esc(deal.store)} · ${esc(deal.category)} ${verdictBadge(deal)}</p>
        <p class="detail-blurb">${esc(deal.blurb)}</p>
        <p class="detail-price">${money(deal.price)} <span class="was">${money(deal.was)}</span></p>
        <table class="math">
          <tr><th>Usual price</th><td>${money(deal.was)}</td></tr>
          <tr><th>Black Friday price</th><td>${money(deal.price)}</td></tr>
          <tr><th>You save</th><td>${money(saving(deal))} (${p}% off)</td></tr>
          <tr><th>Verdict</th><td>${verdict(deal)} — ${verdict(deal) === "HOT" ? "40% off or more" : verdict(deal) === "GOOD" ? "25–39% off" : "15–24% off"}</td></tr>
        </table>
        ${deal.note ? `<p class="detail-note">Note: ${esc(deal.note)}</p>` : ""}
        <p class="detail-checked">Price checked ${checkedLabel(deal.checked)} · Source: ${esc(deal.source)}</p>
        <div class="detail-actions">
          <a class="btn-store big" href="${esc(deal.url)}" target="_blank" rel="noopener">Shop at ${esc(deal.store)} — ${money(deal.price)} ↗</a>
          <a class="btn-detail" href="#/">← Back to all deals</a>
        </div>
      </div>
    </div>
  </section>
  <section class="related">
    <h2>More ${esc(deal.category)} deals</h2>
    <div class="grid">${related.map(dealCard).join("")}</div>
  </section>`;
}

export function notFoundView() {
  return `
  <section class="hero">
    <h1>That deal isn't on this page.</h1>
    <p class="hero-sub">It may have sold out or the link may be wrong. Here are the ${DEALS.length} verified deals instead.</p>
    <p><a class="btn-store" href="#/">← Back to all deals</a></p>
  </section>`;
}

// ---- filtering + sorting (shared by cover and its controls) ----
export function applyFilters(state) {
  const q = state.q.trim().toLowerCase();
  let list = DEALS.filter((d) => {
    if (state.category !== "All" && d.category !== state.category) return false;
    if (state.store !== "All stores" && d.store !== state.store) return false;
    if (pctOff(d) < state.minOff) return false;
    if (q && !(d.title + " " + d.store + " " + d.category).toLowerCase().includes(q)) return false;
    return true;
  });
  const by = {
    pct: (a, b) => pctOff(b) - pctOff(a) || saving(b) - saving(a),
    saving: (a, b) => saving(b) - saving(a),
    low: (a, b) => a.price - b.price,
    high: (a, b) => b.price - a.price,
  }[state.sort] || ((a, b) => pctOff(b) - pctOff(a));
  return [...list].sort(by);
}
