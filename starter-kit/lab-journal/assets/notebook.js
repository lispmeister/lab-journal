(() => {
  document.documentElement.classList.add("js");
  const progress = document.querySelector(".reading-progress");
  const sections = [...document.querySelectorAll("[data-journal-section]")];
  const links = [...document.querySelectorAll(".contents a")];

  // A browser can expose print() without opening a dialog (embedded viewers,
  // for example). Always offer a next step; never infer that printing succeeded.
  for (const button of document.querySelectorAll(".print-button")) {
    const help = document.createElement("aside");
    help.className = "print-help";
    help.setAttribute("aria-label", "Print options");
    help.setAttribute("tabindex", "-1");
    help.hidden = true;
    const message = document.createElement("p");
    message.setAttribute("role", "status");
    const instructions = "If no print dialog opens, open this page in a regular browser and use its Print command. Choose Save as PDF in the print dialog to save a copy. No file is downloaded automatically.";
    message.textContent = instructions;
    const close = document.createElement("button");
    close.type = "button";
    close.textContent = "Close print help";
    const dismiss = () => { help.hidden = true; button.focus(); };
    close.addEventListener("click", dismiss);
    help.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { event.preventDefault(); dismiss(); }
    });
    help.append(message, close);
    document.body.append(help);
    button.addEventListener("click", () => {
      message.textContent = instructions;
      help.hidden = false;
      help.focus({ preventScroll: true });
      try { window.print(); }
      catch { message.textContent = "Printing is unavailable here. " + instructions; }
    });
  }

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
      if (section.getClientRects().length && section.getBoundingClientRect().top + window.scrollY <= line) active = section.id;
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
        const searchable = normalizeSearch(`${row.textContent} ${row.dataset.markdown || ""} ${row.dataset.search || ""}`);
        const match = query.split(" ").every((term) => searchable.includes(term));
        row.hidden = !match;
        if (match) visible += 1;
      }
      if (empty) empty.style.display = visible ? "none" : "block";
      const count = document.querySelector("[data-search-status]");
      if (count) count.textContent = `${visible} of ${rows.length} records shown`;
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
    // Hash navigation is a reader request to see the target, even across lenses.
    const revealTarget = (hash, focus = false) => {
      let id;
      try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target) return;
      if (target.closest("[data-record-layer][hidden]")) showLayer("all");
      target.scrollIntoView({ block: "start" });
      if (focus) {
        if (!target.matches("a, button, input, [tabindex]")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
      updateLocation();
    };
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      let target;
      try { target = document.getElementById(decodeURIComponent(url.hash.slice(1))); } catch { return; }
      if (!target) return;
      event.preventDefault();
      if (location.hash !== url.hash) history.pushState(null, "", url.hash);
      revealTarget(url.hash, true);
    });
    window.addEventListener("hashchange", () => revealTarget(location.hash, true));
    showLayer("all");
    if (location.hash) revealTarget(location.hash);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateProgress();
  updateLocation();
})();
