# Datathon Award Pop-up

This version does **not** create a separate page.

The Datathon story opens as a modal/pop-up when the user clicks the
"1st Place — SUDATA × SUBAA Datathon 2025" row inside the existing
Awards & Scholarships section.

## Files

- `datathon-popup.html`
  - Award-row example
  - Full modal story markup

- `datathon-popup.css`
  - Styling for the clickable award row and modal

- `datathon-popup.js`
  - Open / close behaviour
  - Escape-to-close
  - backdrop click
  - basic keyboard focus management

- `assets/`
  - 2024 Datathon group photo
  - 2025 Team Clesmor anime image
  - 2025 first-place certificate

## Integration

### 1. Add CSS

In your page `<head>`:

```html
<link rel="stylesheet" href="datathon-popup.css">
```

Or copy the CSS into your existing site stylesheet.

### 2. Add the award row

Copy the first `award-item` block from `datathon-popup.html` into your
existing "Awards & Scholarships" list.

If your site already has its own award-row classes, keep your existing
layout and add:

```html
data-open-datathon-story
role="button"
tabindex="0"
aria-haspopup="dialog"
aria-controls="datathon-story-modal"
```

to the clickable 2025 award element.

### 3. Add the modal

Copy the `<div class="datathon-modal" ...>` block from
`datathon-popup.html` near the bottom of the page, immediately before
`</body>`.

### 4. Add JavaScript

Immediately before `</body>`:

```html
<script src="datathon-popup.js"></script>
```

### 5. Copy assets

Put the `assets` folder next to the HTML page or update the image paths.

## Design intent

The Awards section remains minimal:

    2025    1st Place — SUDATA × SUBAA Datathon 2025
            Team Clesmor · Supply-chain forecasting & optimisation

Clicking that row opens the full story **without leaving the portfolio page**.

The popup is deliberately structured as:

- 2024: brief origin
- 2025: main focus
- prediction failure → optimisation pivot
- Team Clesmor visual
- technical evolution
- first-place certificate
- external GitHub / LinkedIn references

## External references included in the modal

2025 repository:
https://github.com/LinLyra/2025-Datathon

Lyra's LinkedIn post:
https://www.linkedin.com/posts/lyra-lin_datathon-sudata-subaa-activity-7384533315615162368-Iy0i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF_B-dgBSHJdEtcei83SqnFyM0TTt5quSI4

2024 project:
https://github.com/claisyd/Stock-Prediction-Datathon-2024
