(() => {
  const progress = document.querySelector(".reading-progress");
  const sections = [...document.querySelectorAll("[data-journal-section]")];
  const links = [...document.querySelectorAll(".contents a")];

  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, value))}%`;
  };

  const updateLocation = () => {
    if (!sections.length || !links.length) return;
    const line = window.scrollY + Math.min(220, window.innerHeight * 0.3);
    let active = sections[0].id;
    for (const section of sections) {
      if (section.offsetTop <= line) active = section.id;
    }
    for (const link of links) {
      if (link.getAttribute("href") === `#${active}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  };

  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      updateProgress();
      updateLocation();
      queued = false;
    });
  };

  const search = document.querySelector("[data-catalog-search]");
  if (search) {
    const rows = [...document.querySelectorAll("[data-catalog-row]")];
    const empty = document.querySelector(".empty-search");
    const normalizeSearch = (value) => value
      .toLowerCase()
      .replace(/[–—−]/g, "-")
      .replace(/\s+/g, " ")
      .trim();
    search.addEventListener("input", () => {
      const query = normalizeSearch(search.value);
      let visible = 0;
      for (const row of rows) {
        const searchable = normalizeSearch(`${row.textContent} ${row.dataset.markdown || ""}`);
        const match = !query || searchable.includes(query);
        row.hidden = !match;
        if (match) visible += 1;
      }
      if (empty) empty.style.display = visible ? "none" : "block";
    });
  }

  const layerButtons = [...document.querySelectorAll("[data-layer-filter]")];
  const layeredSections = [...document.querySelectorAll("[data-record-layer]")];
  if (layerButtons.length && layeredSections.length) {
    const showLayer = (layer) => {
      for (const section of layeredSections) {
        const layers = section.dataset.recordLayer.split(/\s+/);
        section.hidden = layer !== "all" && !layers.includes(layer);
      }
      for (const button of layerButtons) {
        button.setAttribute("aria-pressed", String(button.dataset.layerFilter === layer));
      }
      updateProgress();
      updateLocation();
    };
    for (const button of layerButtons) {
      button.addEventListener("click", () => showLayer(button.dataset.layerFilter));
    }
    showLayer("all");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateProgress();
  updateLocation();
})();
