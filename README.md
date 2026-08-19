# Thomas website — Research & Applied AI patch

This is a **minimal patch** for the current GitHub Pages site. It is designed to preserve the existing
Professional & Leadership Experience and Teaching popups while replacing only the empty
`Research Experience` placeholder.

## What this patch adds

1. **Jul 2025–Present — Optimisation & Generative Models with Dr Andi Han**
   - sustained research relationship rather than repeating the SCDL3991 card
   - >10,000 controlled PyTorch runs / six optimisers / score-learning geometry
   - long-form research popup

2. **FoundersHack Sydney 2026 — LevelUp**
   - role shown as **AI Lead**
   - multimodal pipeline: live transcription + slide context + LLM reaction / quiz loop
   - product constraints, remote build evidence, founder / VC ecosystem story
   - phrasing intentionally says "AI integration workstream" rather than claiming sole authorship

3. **COMM-STEM × SUDATA Data-Hack 2026 — Expansion Copilot**
   - role shown as **Team Lead — Spatial Intelligence**
   - Python + Polars + H3 + explainable scoring + PyDeck / Streamlit
   - group photo and public event evidence
   - emphasis on transparent decision support and technical leadership

4. A short **Research → Systems → Product** bridge at the end of the new block.

---

## Upload / edit steps

### 1. Add one stylesheet link to `index.html`

Immediately after the existing line:

```html
<link rel="stylesheet" href="experience/experience.css" />
```

add:

```html
<link rel="stylesheet" href="experience/research-applied-ai.css" />
```

### 2. Replace the current placeholder block in `index.html`

In the current site, inside:

```html
<section id="experience" class="section">
```

delete only the existing heading / placeholder:

```html
<div class="section-heading"><h2>Research Experience</h2>...</div>
<article class="timeline-item">
  ...
</article>
```

Keep the later:

```html
<div class="subsection professional-experience">
```

and everything after it.

Paste the full content of:

`index-research-replacement.html`

where the placeholder used to be.

### 3. Replace the current popup loader

Replace:

`experience/loader.js`

with the file in this patch. It preserves the four existing popup mappings and adds the three new ones.

### 4. Upload these new popup files

- `experience/andi-optimisation-2025-present.html`
- `experience/foundershack-levelup-2026.html`
- `experience/datahack-expansion-copilot-2026.html`
- `experience/research-applied-ai.css`

### 5. Upload the image folders exactly as supplied

- `assets/images/experience/foundershack/`
- `assets/images/experience/datahack/`

The filenames in the popup HTML already match these assets.

---

## Why the copy is written this way

The main page stays **evidence-first and concise**. The popups carry the personal story.

I deliberately avoid:
- calling LevelUp a winning/finalist project without evidence;
- implying Thomas worked *for* Blackbird, Folklore or Startmate;
- implying the Andi work has an unpublished result or manuscript that has not been established;
- calling Thomas a formal Research Assistant unless that was an official appointment.

The venture paragraph therefore uses the safer phrase **founder / VC ecosystem exposure and training**.

## Optional factual upgrades

If you have public evidence for any of these, the copy can be made stronger:
- exact formal title for the ongoing work with Dr Andi Han;
- exact FounderHack team roster / Thomas's role evidence;
- exact Blackbird / Folklore / Startmate program names, dates, mentors or meetings;
- direct link to the Expansion Copilot GitHub repository;
- FounderHack demo video / repository link that should be attributed to Thomas's team.

## Strategic note for the KAIST COCO application

The section is intentionally *COCO-compatible* rather than explicitly saying "built for COCO."
It signals:
- sustained research motivation,
- Python / PyTorch experimentation,
- ability to adapt quickly,
- collaboration and discussion,
- multimodal system building,
- systematic evaluation / explainability,
- willingness to connect research to real users.

One gap should **not** be papered over with website wording: COCO's current Join Us page explicitly asks for
familiarity with at least one training framework such as `verl`, `trl`, `llama factory`, or `unsloth`.
If you do not yet have a public project using one of these, the strongest next move is a small,
clean reproduction / ablation project that can be linked from the website before the application.