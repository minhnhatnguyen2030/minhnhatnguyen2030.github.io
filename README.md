# SUDATA × SUBAA Datathon 2025 — Achievement Folder

This folder is designed for Thomas (Minh-Nhat) Nguyen's GitHub Pages portfolio.

The story **does not become a separate website page**.

Instead:

1. The main homepage keeps a compact entry inside **Awards & Scholarships**.
2. Clicking that award entry dynamically loads this achievement folder.
3. The full 2024 → 2025 Datathon story appears as a modal/pop-up over the homepage.
4. Closing the modal returns the visitor to exactly where they were.

## Recommended repository structure

```text
/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── ...
│
├── stories/
│   ├── story-01/
│   └── story-02/
│
└── achievements/
    └── datathon-2025/
        ├── modal.html
        ├── style.css
        ├── loader.js
        └── assets/
            ├── certificate-2025.jpg
            ├── datathon-2024-group.jpg
            └── team-clesmor-2025.jpg
```

This keeps substantial achievements modular in the same spirit as the folder-per-story architecture,
while preserving **Awards & Scholarships** as a clean section on the homepage.

## Installation

### 1. Upload the folder

Upload:

```text
achievements/datathon-2025/
```

to the repository root exactly as supplied.

### 2. Replace the placeholder award row

Open `index.html`.

Under:

```text
Awards & Scholarships
```

replace the first placeholder award with the HTML in:

```text
INDEX-INTEGRATION.html
```

### 3. Load the achievement script

The integration snippet already contains:

```html
<script src="achievements/datathon-2025/loader.js"></script>
```

This must appear once near the end of `index.html`, before `</body>`.

If you paste only the award row, add that script separately.

## Final homepage behaviour

The homepage will show approximately:

```text
Awards & Scholarships

2025    1st Place — SUDATA × SUBAA Datathon 2025
        Team Clesmor · Supply-chain forecasting, machine learning & optimisation
```

Clicking the row opens the full achievement story.

## Story emphasis

### 2024 — concise origin
- JP Morgan stock-price movement prediction
- historical time series
- tweet sentiment as a predictive feature
- machine-learning models and cross-validation
- Calvin + Thomas visible at the far left of the group photo
- did not place

### 2025 — main story
- Team Clesmor
- 24-hour supply-chain challenge
- initial predictive modelling underperformed
- team pivoted rather than forcing a weak model
- forecasting + ML + network optimisation
- decision-focused analytical framing
- 1st Place
- certificate
- team anime image

## References embedded in the modal

2025 repository:
https://github.com/LinLyra/2025-Datathon

Lyra Lin's LinkedIn post:
https://www.linkedin.com/posts/lyra-lin_datathon-sudata-subaa-activity-7384533315615162368-Iy0i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF_B-dgBSHJdEtcei83SqnFyM0TTt5quSI4

2024 project:
https://github.com/claisyd/Stock-Prediction-Datathon-2024
