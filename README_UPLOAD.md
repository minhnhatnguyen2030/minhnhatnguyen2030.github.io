# Research Projects 3 & 4 — GitHub Pages Update

This package adds two **ongoing / prospective** research entries to the existing Selected Research section of:

`minhnhatnguyen2030/minhnhatnguyen2030.github.io`

It is designed to merge into the current repository without changing the existing SCDL3991 and DATA3888 detailed project pages.

## What this update adds

### 3. Sparse Sufficient Dimension Reduction via Distance Covariance

**Website status:** `IN DISCUSSION`

The page is intentionally conservative. It records the official 2026 Statistics Honours project topic and Thomas's preparation for it, but does **not** state that Thomas has formally commenced the Honours project or that supervision has been confirmed.

The official project listing names:
- Dr Linh Nghiem
- Dr Andi Han

The detailed page explains:
- sufficient dimension reduction and `Z = B^T X`;
- distance covariance as a nonlinear dependence measure;
- the proposed sparsity extension;
- manifold optimisation and high-dimensional datasets;
- possible questions around sparsity, structural-dimension selection and optimisation geometry;
- Thomas's advanced-mode preparation with Dr Linh Nghiem through:
  - MATH1962 — Mathematics 1B (Advanced)
  - STAT3922 — Applied Linear Models (Advanced)
- the connection to Thomas's previous SCDL3991 work with Dr Andi Han.

### 4. STAT3888 — Australian Health Survey Statistical Machine Learning Project

**Website status:** `IN PROGRESS`

This page presents the current Semester 2, 2026 group project and Thomas's stated role as the **statistics / machine-learning lead**.

It explains:
- the interdisciplinary NUTM/STAT structure;
- the Australian Health Survey project setting;
- Thomas's current quantitative leadership responsibilities;
- the research-question → data audit → statistical formulation → method comparison → validation → communication workflow;
- the statistical-ML toolkit taught in STAT3888;
- a clear distinction between what is already established and what is still developing;
- A/Prof John Ormerod's academic/research profile as relevant statistical-learning context.

No final model, metric or substantive conclusion is invented. The page explicitly says final methods and results will be added after validation.

---

## Upload / replace these paths

```text
/index.html                                  [REPLACE]
/style.css                                   [REPLACE]

/research/
├── sparse-sdr/
│   └── index.html                           [NEW]
└── stat3888/
    └── index.html                           [NEW]

/assets/
├── css/
│   └── ongoing-research.css                 [NEW]
└── images/
    └── research/
        ├── sparse-sdr-card.jpg              [NEW]
        ├── sparse-sdr-official-listing.jpg  [NEW]
        ├── linh-nghiem-profile.jpg           [NEW]
        ├── stat3888-card.jpg                 [NEW]
        ├── stat3888-unit-page.jpg            [NEW]
        ├── stat3888-project-overview.jpg     [NEW]
        └── SOURCE_NOTES.md                    [NEW]
```

## Files this package deliberately does NOT replace

Keep your current versions of:

- `/script.js`
- `/research/scdl3991/index.html`
- `/research/data3888/index.html`
- `/assets/css/research-project.css`
- `/assets/images/research/scdl3991-*.jpg`
- `/assets/images/research/data3888-*.jpg`
- `/assets/images/profile.jpg`
- all `/journey/` files and photographs
- your CV and other `/files/` content

The replacement root `index.html` continues to reference those existing assets.

---

## Easiest upload method in GitHub

1. Open the repository:
   `minhnhatnguyen2030/minhnhatnguyen2030.github.io`
2. Choose **Add file → Upload files**.
3. Drag the **contents** of this package into the repository root.
4. Preserve the folder structure exactly.
5. GitHub should ask to replace only the existing `index.html` and `style.css` from this package.
6. Commit the changes to `main`.
7. Wait for GitHub Pages to redeploy.
8. Check the homepage research section and the two new project URLs below.

### New URLs after deployment

- `https://minhnhatnguyen2030.github.io/research/sparse-sdr/`
- `https://minhnhatnguyen2030.github.io/research/stat3888/`

---

## Screenshots included

The four source screenshots supplied for this update are included as web-optimised JPGs:

- official Sparse SDR project listing;
- Dr Linh Nghiem profile;
- STAT3888 unit page;
- STAT3888 Australian Health Survey Project 1 overview.

Two additional 4:3 crops are included for the homepage research thumbnails.

---

## Source links embedded in the pages

Sparse SDR:
- `https://www.maths.usyd.edu.au/u/UG/HM/coordinator/stat2026.pdf`
- `https://lnghiemum.github.io`
- `https://andihan3.github.io`
- `https://www.sydney.edu.au/units/MATH1962`
- `https://www.sydney.edu.au/units/STAT3922`

STAT3888:
- `https://www.sydney.edu.au/units/STAT3888`
- `https://www.maths.usyd.edu.au/u/jormerod/`

---

## Important wording choices

1. **Sparse SDR is “IN DISCUSSION”, not “ongoing research” in the sense of formally commenced work.**
   This protects the accuracy of the public portfolio while still showing the serious research direction being explored.

2. **The official Honours guide is used to describe the proposed topic and listed supervisors.**
   The page separately describes Thomas's personal status.

3. **MATH1962 and STAT3922 are explicitly labelled “Advanced”.**
   This makes the advanced-mode mathematical/statistical preparation visible without exaggerating what the courses prove about the prospective project.

4. **STAT3888 is “IN PROGRESS”.**
   The project page describes Thomas's role and workflow but does not manufacture results before the group has completed the analysis.

5. **STAT3888 course methods are labelled as the unit's toolkit, not as methods already used in the project.**
   This prevents a future discrepancy if the final analysis uses only a subset.
