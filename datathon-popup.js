(() => {
  const modal = document.getElementById("datathon-story-modal");
  if (!modal) return;

  const triggers = document.querySelectorAll("[data-open-datathon-story]");
  const closeButtons = modal.querySelectorAll("[data-close-datathon-story]");
  const panel = modal.querySelector(".datathon-modal__panel");
  let lastFocused = null;

  function openModal() {
    lastFocused = document.activeElement;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("datathon-modal-open");

    const close = modal.querySelector(".datathon-modal__close");
    window.setTimeout(() => close?.focus(), 0);
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("datathon-modal-open");

    if (lastFocused) lastFocused.focus();
  }

  triggers.forEach(trigger => {
    trigger.addEventListener("click", openModal);

    trigger.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal();
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", event => {
    if (!modal.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeModal();
      return;
    }

    // Simple keyboard focus trap.
    if (event.key === "Tab") {
      const focusable = modal.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
})();
