# Adaptive photo layout update

## 1. CSS
Append the contents of:

`assets/css/adaptive-story-layout.css`

to the END of your existing:

`assets/css/journey.css`

Putting it at the end lets these rules override the earlier image rules.

## 2. JavaScript
Upload:

`assets/js/journey-images.js`

Then add this line immediately before `</body>` in:

`journey/2026/summer-seoul/index.html`

```html
<script src="/assets/js/journey-images.js"></script>
```

## What happens automatically

For ordinary `figure.story-media` photographs, JavaScript reads the actual
photo dimensions and adds a class automatically:

- Portrait → narrow (~620px)
- Square-ish → text-aligned (~740px)
- Landscape → wide (~980px)
- Panorama → extra-wide (~1160px)

Images marked `class="story-media full"` stay intentionally full-width.

## Recommended manual hierarchy for the Seoul story

Keep these as `full`:
- 06 ICML entrance
- 11 KAIST Institutes
- 15 farewell Seoul

Keep these ordinary/adaptive:
- 02 Yonsei
- 05 Seoul culture
- 09 friendship
- 10 Daejeon rain
- 14 Namsan

For photo pairs (03+04, 07+08, 12+13), keep `story-photo-grid`.

If you do NOT want paired images cropped to matching 4:3 rectangles, change:

```html
<figure class="story-photo-grid">
```

to:

```html
<figure class="story-photo-grid natural">
```

## Specific fix for the birthday image shown in your screenshot

The birthday image should NOT be full-width. If it is currently:

```html
<figure class="story-media full">
```

change it to:

```html
<figure class="story-media medium">
```

or let the script decide automatically:

```html
<figure class="story-media">
```

This brings the photograph closer to the width of the prose and removes the
feeling that a casual birthday moment has the same visual importance as the
main KAIST/ICML establishing photographs.
