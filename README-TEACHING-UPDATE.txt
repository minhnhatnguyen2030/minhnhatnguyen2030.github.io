THOMAS EXPERIENCE PACKAGE — V2
Teaching & Academic Leadership update
======================================

WHAT IS NEW
-----------
This version contains everything from the earlier Professional & Leadership
Experience package PLUS the full teaching story:

  "From Student to Tutor — DATA1002"

It includes:
- the homepage teaching row
- a long-form story-style popup
- a standalone full story page
- all supplied teaching evidence images
- updated experience/loader.js
- updated experience/experience.css
- a public-safe version of Daniel Friedrich's recommendation letter
  (direct phone/email details omitted from the website image)


NEW FILES
---------
experience/
  data1002-teaching-2025.html
  index-teaching-snippet.html
  teaching-data1002-2025/
    index.html
    story.css

assets/images/experience/teaching/
  data1002-unit.jpg
  ed-leaderboard-2024.jpg
  data2901-unit.jpg
  data2x01-leaderboard-2025.jpg
  daniel-email.jpg
  daniel-recommendation-public.jpg
  daniel-linkedin.jpg
  usyd-group-nasim-davin.jpeg
  aishwarya-scdl3991-story.jpeg
  josiah-scholar.jpg
  data2x02-final-wrap-2025.jpg


IF YOU ALREADY INSTALLED THE PREVIOUS EXPERIENCE PACKAGE
---------------------------------------------------------
You only need ONE manual index.html edit:

1. Upload/overwrite the complete `experience/` folder from this package.
2. Upload/merge `assets/images/experience/` from this package.
3. In index.html, replace the old empty:

   <div class="subsection">
     <h3>Teaching & Leadership</h3>
     <p class="muted">...</p>
   </div>

   with the contents of:

   experience/index-teaching-snippet.html

That is all.

DO NOT manually edit CSS.
The updated experience/experience.css already contains the teaching-story styles.

DO NOT manually edit loader.js.
The updated loader already knows how to open:
  data1002-teaching-2025


IF YOU HAVE NOT INSTALLED THE PREVIOUS EXPERIENCE PACKAGE YET
--------------------------------------------------------------
In addition to the steps above, index.html needs:

Inside <head>, directly after:
  <link rel="stylesheet" href="style.css" />

add:
  <link rel="stylesheet" href="experience/experience.css" />


Near </body>, after your other scripts, add:
  <script src="experience/loader.js"></script>


FULL STORY PAGE
---------------
The popup includes an "Open full story ↗" link.

The page is:
  experience/teaching-data1002-2025/

It is intentionally styled as a long-form visual narrative, closer to the
Summer in Seoul story style than a conventional CV entry.


IMPORTANT
---------
Do not replace your current index.html with a file from this package.
Your index.html has been changing throughout the website project, so the
safest approach is the single snippet replacement described above.

All previous Professional & Leadership Experience popup files are retained.
