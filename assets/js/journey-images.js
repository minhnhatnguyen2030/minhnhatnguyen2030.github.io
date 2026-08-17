
/*
  MY AI JOURNEY — automatic photo sizing

  For every normal .story-media figure, detect the photograph's
  natural aspect ratio and assign an editorial width automatically.

  No manual width calculation is needed when you replace a photo.
*/

document.addEventListener("DOMContentLoaded", () => {
  const figures = document.querySelectorAll(".story-media:not(.full)");

  figures.forEach((figure) => {
    const img = figure.querySelector("img");
    if (!img) return;

    const classify = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      if (!w || !h) return;

      figure.classList.remove(
        "is-portrait",
        "is-square",
        "is-landscape",
        "is-panorama"
      );

      const ratio = w / h;

      if (ratio < 0.82) {
        figure.classList.add("is-portrait");
      } else if (ratio < 1.18) {
        figure.classList.add("is-square");
      } else if (ratio < 1.8) {
        figure.classList.add("is-landscape");
      } else {
        figure.classList.add("is-panorama");
      }
    };

    if (img.complete) {
      classify();
    } else {
      img.addEventListener("load", classify, { once: true });
    }
  });
});
