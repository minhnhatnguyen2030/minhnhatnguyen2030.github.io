# Selected Research Update — Upload Guide

This package is designed for the existing repository:

`minhnhatnguyen2030/minhnhatnguyen2030.github.io`

It updates the empty **Selected Research** section and adds dedicated pages for SCDL3991 and DATA3888.

## What this package changes

### Replace these existing root files
1. `/index.html`
2. `/style.css`

### Add these new files/folders
```text
research/
├── scdl3991/
│   └── index.html
└── data3888/
    └── index.html

assets/
├── css/
│   └── research-project.css
└── images/
    └── research/
        ├── scdl3991-card.jpg
        ├── scdl3991-geometry.jpg
        ├── scdl3991-results.jpg
        ├── data3888-card.jpg
        ├── data3888-models.jpg
        ├── data3888-shiny.jpg
        └── IMAGE_GUIDE.md

files/
└── RESEARCH_REPORTS_README.md
```

Your existing `script.js`, journey folders, profile photo, CV path and other assets are not changed by this update.

## Easiest GitHub web upload

1. Open:
   `https://github.com/minhnhatnguyen2030/minhnhatnguyen2030.github.io`
2. Choose **Add file → Upload files**.
3. Drag the **contents of this package** into the repository root.
4. Keep the folder structure exactly as shown above.
5. GitHub will ask whether to replace `index.html` and `style.css` — confirm the replacement.
6. Commit to `main`.
7. Wait for GitHub Pages to redeploy.
8. Visit:
   `https://minhnhatnguyen2030.github.io/#research`

Dedicated pages:
- `https://minhnhatnguyen2030.github.io/research/scdl3991/`
- `https://minhnhatnguyen2030.github.io/research/data3888/`

## Images

The included research JPGs are clean placeholders.

When ready, replace each placeholder with your chosen project image **using exactly the same filename**.

Read:
`/assets/images/research/IMAGE_GUIDE.md`

for the recommended pages / figures from your uploaded reports and presentation slides.

## Confidential reports

The website does **not** publish either report PDF.

The "Request report" buttons open an email to:
`thomas.nguyen.ai2030@gmail.com`

This avoids putting confidential coursework or research material into public Git history.

## Included claims

SCDL3991:
- High Distinction: 88/100
- individual semester-long research
- more than 10,000 experimental runs
- six optimisers
- core finding: geometry / curvature anisotropy mattered more than mode count alone

DATA3888:
- High Distinction: 88/100
- team / technical lead
- Image21 breast-cancer H&E project
- five CNN architectures
- ResNet18: 88.65% accuracy, macro-F1 0.8796
- EfficientNetB0 selected for practical Shiny / Grad-CAM deployment

## Important wording choice

For Manoj M. Wagle, the website says:
"University of Sydney researcher with MIT CSAIL research affiliation"

rather than simply "from MIT". This is more precise while still showing the MIT connection.
