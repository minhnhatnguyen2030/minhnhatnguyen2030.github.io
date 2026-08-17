# SCDL3991 GitHub Research Page — Full Update

This package updates the dedicated SCDL3991 research page with a substantially richer research narrative and replaces the old generic image placeholders/captions with three report-derived visualisations.

## Replace / upload these files

```text
research/
└── scdl3991/
    └── index.html

assets/
├── css/
│   └── research-project.css
└── images/
    └── research/
        ├── scdl3991-card.jpg
        ├── scdl3991-geometry.jpg
        └── scdl3991-results.jpg
```

Upload the **contents** of this folder to the root of:

`minhnhatnguyen2030/minhnhatnguyen2030.github.io`

and allow GitHub to replace files with the same names.

## New figure titles on the page

### Figure 1
**Optimiser robustness changes with mixture geometry**

Shows mean RMSE for all six optimisers across K = 2, 3, 4, 5 using Table 7 of the final report.

### Figure 2
**Asymmetry can matter more than adding another mode**

Directly compares K = 3 and K = 4 for the five non-SGD methods. The caption explicitly notes that Momentum is the exception, avoiding an over-strong claim.

### Figure 3
**More data helps, but optimiser robustness still matters**

Uses the K = 3 sample-size results from Table 6 to show how RMSE changes from n = 50 to 1000.

## Page improvements

The updated page now includes:

- why analytical score learning on GMMs is useful;
- the exact score equation;
- a compact experimental-design dashboard;
- the project's three scientific questions;
- full methodology cards;
- a mean-RMSE result table;
- six research insights;
- sample-size and diffusion-noise interpretation;
- limitations;
- future research directions;
- supervisor background;
- a concise explanation of how the project shaped Thomas's research direction.

## Source integrity

All quantitative project claims and interpretations on the page are grounded in:

`Final_SCDL3991_Report_540619953.pdf`

The generated charts are new web visualisations made directly from the numerical tables in the submitted report; they are not screenshots of the confidential PDF.

The report PDF itself is **not included** in this public GitHub update.
