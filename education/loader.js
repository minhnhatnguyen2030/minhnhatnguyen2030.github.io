(() => {
  const educationFiles = {
    "usyd-2024-2026": "education/usyd-2024-2026.html",
    "yonsei-yiss-2026": "education/yonsei-yiss-2026.html",
    "amsi-2025-2026": "education/amsi-2025-2026.html",
    "korea-iwc-2025-26": "education/korea-iwc-2025-26.html",
    "earlier-study": "education/earlier-study.html"
  };

  let lastFocusedElement = null;

  const overlay = document.createElement("div");
  overlay.className = "edu-modal-overlay";
  overlay.setAttribute("aria-hidden", "true");

  overlay.innerHTML = `
    <div class="edu-modal"
         role="dialog"
         aria-modal="true"
         aria-label="Education details">

      <button class="edu-modal-close"
              type="button"
              aria-label="Close education details">×</button>

      <div class="edu-modal-body">
        <p>Loading…</p>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const modal = overlay.querySelector(".edu-modal");
  const body = overlay.querySelector(".edu-modal-body");
  const closeButton = overlay.querySelector(".edu-modal-close");

  async function openEducation(slug) {
    const file = educationFiles[slug];
    if (!file) return;

    lastFocusedElement = document.activeElement;

    body.innerHTML = "<p>Loading…</p>";
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("edu-modal-open");

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Could not load ${file}`);

      body.innerHTML = await response.text();
      modal.scrollTop = 0;
    } catch (error) {
      console.error(error);
      body.innerHTML = `
        <div class="edu-popup-content">
          <h2>Unable to load education details</h2>
          <p>Please refresh the page and try again.</p>
        </div>
      `;
    }

    closeButton.focus();
  }

  function closeEducation() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("edu-modal-open");

    if (lastFocusedElement) lastFocusedElement.focus();
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-education]");
    if (trigger) openEducation(trigger.dataset.education);
  });

  closeButton.addEventListener("click", closeEducation);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeEducation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeEducation();
    }
  });
})();
