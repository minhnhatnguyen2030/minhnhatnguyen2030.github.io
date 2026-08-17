# DATA3888 / Image21 GitHub Research Page — Full Update

This package upgrades the dedicated DATA3888 page into a detailed applied-AI research case study.

## Upload / replace these paths

```text
research/
└── data3888/
    └── index.html

assets/
├── css/
│   └── research-project.css
└── images/
    └── research/
        ├── data3888-card.jpg
        ├── data3888-class-recall.jpg
        ├── data3888-shiny.jpg
        └── data3888-gradcam.jpg
```

Upload the **contents** of this folder into the root of:

`minhnhatnguyen2030/minhnhatnguyen2030.github.io`

Allow GitHub to replace files with the same names.

The CSS in this update is based on the latest SCDL3991 research-page CSS, so both detailed project pages retain a consistent design.

## Figure titles

### Figure 1
**Architecture complexity did not determine test performance**

A new clean web chart generated from the final report's five-model test accuracy and macro-F1 values.

Directly underneath this figure is the Google Drive link to the full Image21 presentation:

`https://drive.google.com/file/d/1GGktW8ytDUZv6jVuHPz6HX4sPvnx0Knc/view?usp=sharing`

### Figure 2
**The strongest models shared the same class-level weakness**

A new chart generated from the row-normalised ResNet18 and EfficientNetB0 confusion-matrix values in the final report, showing that Immune recall was the weakest for both leading models.

### Figure 3
**Image21 turns model comparison into an inspectable research tool**

Uses the real Shiny App slide from the uploaded DATA3888 presentation.

### Figure 4
**Grad-CAM makes a prediction inspectable, not clinically validated**

Uses the representative Immune / Grad-CAM case from the uploaded presentation.

## Major page additions

- project motivation and research questions;
- six-label → three-superclass design;
- fixed 70/15/15 split and leakage caveat;
- balanced sampling and natural-distribution evaluation;
- augmentation and regularisation;
- detailed description of all five CNN architectures;
- full performance table;
- pipeline-level interpretation of model ranking;
- class-level Immune failure analysis;
- ResNet18 vs EfficientNetB0 deployment distinction;
- Shiny inference pipeline;
- Grad-CAM interpretation and limitations;
- Thomas's team / technical-lead contribution;
- reproducibility package and prediction-provenance discussion;
- responsible-AI boundary;
- limitations and future work;
- research-mentor background;
- link between the project and Thomas's developing research interests.

## Source integrity

Project details, metrics and interpretations are grounded in the uploaded:

- `Data3888_image21_final_report_31May.pdf`
- `DATA3888_Minh_Nhat_Nguyen_Slides_24_May.pdf`

The two quantitative charts are newly generated from values reported in the final report.

The Shiny and Grad-CAM images are rendered from the user's actual presentation slides.

No full coursework/report PDF is included in this public GitHub update.
