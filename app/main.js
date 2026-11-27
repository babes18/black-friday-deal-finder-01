// main.js — router and controls for DealHunt 2026.
// Hash routes: #/ (cover grid), #/category/<slug> (one category),
// #/deal/<id> (one deal). Filters live in page state, not in the URL,
// except the category, which is a real route so screenshots can show it.

import { DEALS, CATEGORIES, stats, money } from "./data.js";
import { coverView, categoryView, detailView, notFoundView, applyFilters, dealCard } from "./views.js";

const root = document.getElementById("app");

const state = {
  q: "",
  category: "All",
  store: "All stores",
  minOff: 0,
  sort: "pct",
};

// Cyber Monday ends Monday 30 Nov 2026, 23:59 US Eastern (04:59 UTC, 1 Dec).
const CYBER_END = new Date("2026-12-01T04:59:00Z");

function categoryFromSlug(slug) {
  const found = CATEGORIES.find((c) => c.toLowerCase() === slug.toLowerCase());
  return found || null;
}

function render() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);

  if (parts.length === 0) {
    state.category = "All";
    root.innerHTML = coverView(state);
    wireCover();
  } else if (parts[0] === "category" && parts[1]) {
    const cat = categoryFromSlug(decodeURIComponent(parts[1]));
    if (!cat) {
      root.innerHTML = notFoundView();
    } else {
      root.innerHTML = categoryView(cat, state);
    }
  } else if (parts[0] === "deal" && parts[1]) {
    const deal = DEALS.find((d) => d.id === parts[1]);
    root.innerHTML = deal ? detailView(deal) : notFoundView();
  } else {
    root.innerHTML = notFoundView();
  }

  startCountdown();
  window.scrollTo(0, 0);
}

function wireCover() {
  const search = document.getElementById("search");
  const storeSel = document.getElementById("store-filter");
  const discSel = document.getElementById("disc-filter");
  const sortSel = document.getElementById("sort");

  if (search) {
    search.addEventListener("input", () => {
      state.q = search.value;
      refreshGrid();
    });
  }
  if (storeSel) {
    storeSel.addEventListener("change", () => {
      state.store = storeSel.value;
      refreshGrid();
    });
  }
  if (discSel) {
    discSel.addEventListener("change", () => {
      state.minOff = Number(discSel.value);
      refreshGrid();
    });
  }
  if (sortSel) {
    sortSel.addEventListener("change", () => {
      state.sort = sortSel.value;
      refreshGrid();
    });
  }

  document.querySelectorAll(".chip[data-category]").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.category = chip.dataset.category;
      document.querySelectorAll(".chip[data-category]").forEach((c) => {
        c.classList.toggle("active", c === chip);
      });
      refreshGrid();
    });
  });

  document.querySelectorAll("[data-action='clear-filters']").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.q = "";
      state.category = "All";
      state.store = "All stores";
      state.minOff = 0;
      state.sort = "pct";
      render();
    });
  });
}

// Re-render only the grid + count so typing in search keeps focus.
function refreshGrid() {
  const grid = document.querySelector(".grid");
  const count = document.querySelector(".count");
  if (!grid) return;
  const filtered = applyFilters(state);
  grid.innerHTML = filtered.length
    ? filtered.map((d) => dealCard(d)).join("")
    : `<p class="empty">No deals match those filters. <button class="linklike" data-action="clear-filters">Clear filters</button></p>`;
  if (count) count.textContent = `${filtered.length} of ${DEALS.length} deals`;
  const clearBtn = grid.querySelector("[data-action='clear-filters']");
  if (clearBtn) clearBtn.addEventListener("click", () => {
    state.q = "";
    state.category = "All";
    state.store = "All stores";
    state.minOff = 0;
    state.sort = "pct";
    render();
  });
}

// ---- Cyber Monday countdown (updates once a second while visible) ----
let countdownTimer = null;

function startCountdown() {
  const el = document.getElementById("countdown");
  if (countdownTimer) clearInterval(countdownTimer);
  if (!el) return;
  const tick = () => {
    const ms = CYBER_END - Date.now();
    if (ms <= 0) {
      el.textContent = "Cyber Monday has ended — prices may have changed.";
      clearInterval(countdownTimer);
      return;
    }
    const days = Math.floor(ms / 86400000);
    const hours = Math.floor((ms % 86400000) / 3600000);
    const mins = Math.floor((ms % 3600000) / 60000);
    el.textContent = `Cyber Monday ends in ${days}d ${hours}h ${mins}m`;
  };
  tick();
  countdownTimer = setInterval(tick, 30000);
}

window.addEventListener("hashchange", render);
render();

// Footer stats line (filled from the same data the strip uses).
const foot = document.getElementById("foot-stats");
if (foot) {
  const s = stats();
  foot.textContent = `${s.total} deals · ${s.avgPct}% average discount · ${money(s.totalSaving)} total savings · checked ${"27 Nov 2026"}`;
}
