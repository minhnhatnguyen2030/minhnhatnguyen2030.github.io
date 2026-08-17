# Thomas Nguyen — Academic Website + My AI Journey

GitHub Pages repository for:

**https://minhnhatnguyen2030.github.io**

## Site concept

The site now has two connected layers:

1. **Academic portfolio** — research, publications, experience, education, CV, and contact.
2. **My AI Journey** — a professional long-form photo journal built around key checkpoints.

The current narrative spine is:

**Saigon (2021) → Sydney (study & research) → Seoul (2026) → 2030 (?)**

## Structure

```text
.
├── index.html
├── style.css
├── script.js
├── 404.html
├── README.md
├── journey/
│   ├── index.html
│   ├── 2021/
│   │   └── summer-saigon/
│   │       └── index.html
│   ├── 2026/
│   │   └── summer-seoul/
│   │       └── index.html
│   └── 2030/
│       └── next-checkpoint/
│           └── index.html
├── assets/
│   ├── css/
│   │   └── journey.css
│   └── images/
│       └── journey/
│           ├── 2021-saigon/
│           ├── 2026-seoul/
│           └── 2030/
└── files/
    └── Thomas_Nguyen_CV.pdf
```

## Story image folders

### Summer of 2021 — Saigon
Place selected images in:

`assets/images/journey/2021-saigon/`

Suggested names:
- `hero.jpg`
- `volunteering-01.jpg`
- `volunteering-02.jpg`
- `saigon-01.jpg`
- `closing.jpg`

### Summer 2026 in Seoul
Place selected images in:

`assets/images/journey/2026-seoul/`

Suggested names:
- `hero.jpg`
- `seoul-01.jpg`
- `yonsei-01.jpg`
- `research-01.jpg`
- `daejeon-01.jpg`
- `kaist-01.jpg`
- `closing.jpg`

The HTML currently uses visual placeholders so the pages remain clean before the real photographs are chosen. Once images are finalised, replace each placeholder `<div>` with a semantic `<figure><img ...><figcaption>...</figcaption></figure>` block.

## URLs

- `/` — academic homepage
- `/journey/` — My AI Journey timeline
- `/journey/2021/summer-saigon/` — Story 01
- `/journey/2026/summer-seoul/` — Story 02
- `/journey/2030/next-checkpoint/` — future checkpoint

## Next content steps

1. Finalise the 2021 volunteering facts and story.
2. Select the best 2021 photographs and captions.
3. Finalise the 2026 Seoul story and photographs.
4. Replace story placeholders with final prose and real `<img>` elements.
5. Keep the 2030 checkpoint intentionally unfinished until the time comes.
