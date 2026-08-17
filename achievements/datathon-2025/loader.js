(() => {
  const TRIGGER = "[data-achievement='datathon-2025']";
  const modalUrl = "achievements/datathon-2025/modal.html";
  const cssUrl = "achievements/datathon-2025/style.css";

  let modal = null;
  let lastFocused = null;

  function ensureStyles() {
    if (document.querySelector(`link[href="${cssUrl}"]`)) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    document.head.appendChild(link);
  }

  async function ensureModal() {
    if (modal) return modal;

    ensureStyles();

    const response = await fetch(modalUrl);
    if (!response.ok) {
      throw new Error(`Could not load ${modalUrl}: ${response.status}`);
    }

    const html = await response.text();
    const holder = document.createElement("div");
    holder.innerHTML = html.trim();

    modal = holder.firstElementChild;
    document.body.appendChild(modal);

    modal.querySelectorAll("[data-datathon-close]").forEach(el => {
      el.addEventListener("click", closeModal);
    });

    return modal;
  }

  async function openModal() {
    lastFocused = document.activeElement;

    try {
      const m = await ensureModal();
      m.classList.add("is-open");
      m.setAttribute("aria-hidden", "false");
      document.body.classList.add("datathon-achievement-open");

      requestAnimationFrame(() => {
        m.querySelector(".achievement-modal__close")?.focus();
      });
    } catch (error) {
      console.error(error);
    }
  }

  function closeModal() {
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("datathon-achievement-open");

    lastFocused?.focus();
  }

  document.addEventListener("click", event => {
    const trigger = event.target.closest(TRIGGER);
    if (!trigger) return;

    event.preventDefault();
    openModal();
  });

  document.addEventListener("keydown", event => {
    const trigger = event.target.closest?.(TRIGGER);

    if (trigger && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openModal();
      return;
    }

    if (event.key === "Escape" && modal?.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
