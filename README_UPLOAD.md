# Thomas website — Shubin-style rectangular profile update

This update changes only the **main homepage/profile presentation**. Your existing research folders, Journey pages, images, CV, and JavaScript remain untouched.

## Upload to GitHub

In the root of `minhnhatnguyen2030.github.io`, replace:

1. `index.html`
2. `style.css`

Do **not** delete your existing folders such as `assets/`, `research/`, `journey/`, or `files/`.

## What changed

- Large **rectangular 3:4-style portrait** with subtle rounded corners, closely matching the academic-profile presentation in Shubin Kim's site.
- Profile identity is now **center-aligned** beneath the portrait.
- University of Sydney email is displayed prominently:
  `mngu0728@uni.sydney.edu.au`
- Compact Shubin-style social row:
  - CV
  - General/research email
  - GitHub
  - LinkedIn
- Existing left-side section navigation remains underneath, so the rest of Thomas's one-page website continues to work normally.
- Responsive rectangular portrait on mobile.

## Portrait note

The CSS will use your existing file:

`assets/images/profile.jpg`

The current square selfie will automatically be cropped into the portrait frame with `object-fit: cover`.
For the closest visual match to Shubin's page, replace `profile.jpg` later with a naturally vertical portrait (roughly 3:4 or 4:5 aspect ratio) using the **same filename**. No HTML/CSS changes will then be necessary.
