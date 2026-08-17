# Upload Guide — Story 01: Summer of 2021

This package is designed to sit beside your existing Story 02 files without replacing them.

## Upload these new files

```text
journey/
└── 2021/
    └── summer-saigon/
        └── index.html

assets/
├── css/
│   └── story-01-saigon.css
├── js/
│   └── journey-images.js
└── images/
    └── journey/
        └── 2021-saigon/
            ├── 01-hero-saigon-volunteering.jpg
            ├── 02-covid-testing-context.jpg
            ├── 03-truyen-tran-covid-forecast.jpg   [already included]
            ├── 04-data-question.jpg
            ├── 05-quantity-quality.jpg
            ├── 06-biomafia-origin.jpg
            ├── 07-thomas-with-truyen-tran.jpg
            └── PHOTO_UPLOAD_LIST.md
```

## Important

- Keep your existing `/assets/css/journey.css` — Story 01 loads it first.
- `story-01-saigon.css` only adds Story 01-specific styling and placeholders.
- If you already uploaded `/assets/js/journey-images.js` for Story 02, the included copy is the same
  adaptive sizing helper and can simply replace/confirm that file.
- Missing photos display as clean filename placeholders until you upload the real images.
- Photo 03 is already filled with the Truyen Tran forecasting screenshot you supplied.

## URL after GitHub Pages deploys

`https://minhnhatnguyen2030.github.io/journey/2021/summer-saigon/`
