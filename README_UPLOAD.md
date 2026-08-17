# My AI Journey — August 2026 update

This package is built on top of the latest Shubin-style profile version of the homepage, so the rectangular profile layout, USyd email, LinkedIn, and the four research-project entries are preserved.

## What this update fixes

1. **Journey timeline photos now display**
   - Story 01 uses the existing `01-hero-saigon-volunteering.jpg`.
   - Story 02 uses the existing `hero.jpg`.
   - The old grey "Featured photo" placeholders in `/journey/` are removed.

2. **Story 02 homepage preview is more compact**
   - Desktop image maximum height reduced from 430px to 320px.
   - Tablet/mobile heights reduced proportionally.
   - Copy padding is slightly tighter so the feature card does not dominate the homepage.

3. **2030 checkpoint rewritten**
   - Replaces "Leave this page unfinished" with an original future-self reflection: **If life allows, slow down.**
   - Inspired by Haemin Sunim's books/themes without reproducing long passages.
   - Includes the supplied book image, photographed page, and YouTube preview.
   - YouTube destination: `https://youtu.be/d9cHgLl1hO0?si=FNTmgtl5SE80Z66i`

## Upload to GitHub

Upload the **contents of this folder** into the root of `minhnhatnguyen2030.github.io` and allow GitHub to replace files with the same paths.

### Replace
- `index.html`
- `style.css`
- `journey/index.html`
- `journey/2030/next-checkpoint/index.html`
- `assets/css/journey.css`

### Add
- `assets/images/journey/2030/when-things-dont-go-your-way.jpg`
- `assets/images/journey/2030/slow-down-page.jpg`
- `assets/images/journey/2030/slow-down-video.jpg`

### Keep all existing files
In particular, do **not** delete:
- `journey/2021/summer-saigon/`
- `journey/2026/summer-seoul/`
- `assets/images/journey/2021-saigon/`
- `assets/images/journey/2026-seoul/`
- `research/`
- `files/`
- `script.js`

The updated timeline intentionally references the Story 01 and Story 02 images that are already in those existing folders.
