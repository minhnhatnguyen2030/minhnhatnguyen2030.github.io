(() => {
  const experienceFiles = {
    "science-peer-mentor-2026": "experience/science-peer-mentor-2026.html",
    "incubate-startup-fundamentals-2026": "experience/incubate-startup-fundamentals-2026.html",
    "practera-saiep-2026": "experience/practera-saiep-2026.html",
    "data1002-teaching-2025": "experience/data1002-teaching-2025.html"
  };

  let lastFocusedElement = null;

  const overlay = document.createElement("div");
  overlay.className = "experience-modal-overlay";
  overlay.setAttribute("aria-hidden", "true");

  overlay.innerHTML = `
    <div class="experience-modal" role="dialog" aria-modal="true" aria-label="Experience details">
      <button class="experience-modal-close" type="button" aria-label="Close details">×</button>
      <div class="experience-modal-body"><p>Loading…</p></div>
    </div>
  `;

  document.body.appendChild(overlay);

  const modal = overlay.querySelector(".experience-modal");
  const modalBody = overlay.querySelector(".experience-modal-body");
  const closeButton = overlay.querySelector(".experience-modal-close");

  async function openExperience(slug) {
    const file = experienceFiles[slug];
    if (!file) return;

    lastFocusedElement = document.activeElement;
    modalBody.innerHTML = "<p>Loading…</p>";
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("experience-modal-open");

    try {
      const response = await fetch(file, { cache: "no-cache" });
      if (!response.ok) throw new Error(`Could not load ${file}: ${response.status}`);

      modalBody.innerHTML = await response.text();
      modal.scrollTop = 0;
    } catch (error) {
      console.error(error);
      modalBody.innerHTML = `
        <div class="experience-popup-content">
          <h2>Unable to load details</h2>
          <p>Please refresh the page and try again.</p>
        </div>
      `;
    }

    closeButton.focus();
  }

  function closeExperience() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("experience-modal-open");

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-experience]");
    if (!trigger) return;
    event.preventDefault();
    openExperience(trigger.dataset.experience);
  });

  closeButton.addEventListener("click", closeExperience);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeExperience();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeExperience();
    }
  });
})();
