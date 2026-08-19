THOMAS EDUCATION PACKAGE
========================

WHAT THIS PACKAGE ADDS
----------------------
A complete replacement for the Education section, with popup details for:

1. University of Sydney — current BSc/BAdvStudies (Advanced)
2. Yonsei International Summer School 2026
3. AMSI Summer School 2025 & 2026
4. Korea University International Winter Campus 2025–26
5. Earlier study — Fulbright University Vietnam + prior UNSW study

It also includes the public-safe photos supplied for:
- Yonsei certificate
- Yonsei Developmental Psychology class
- Yonsei Entrepreneurship & Venture Capital class
- Yonsei AI & Society class/materials
- AMSI optimisation learning environment
- earlier public LinkedIn education timeline


IMPORTANT ACADEMIC-METRIC NOTE
------------------------------
The USyd official academic record supplied for this update contains:

- 20 completed units
- all completed units worth 6 credit points
- 120 completed credit points
- marks summing to 1544
- progressive calculated WAM = 1544 / 20 = 77.2 / 100

Grade-band profile:
- 4 High Distinctions
- 9 Distinctions
- 5 Credits
- 2 Passes

Indicative 7-point conversion:
HD=7, DI=6, CR=5, PS=4
=> (4*7 + 9*6 + 5*5 + 2*4) / 20
=> 115 / 20
=> 5.75 / 7.0

This 5.75/7.0 value is NOT an official University of Sydney GPA.

The package intentionally does NOT call any unofficial conversion a "KAIST GPA".
KAIST uses a 4.3 scale internally, but no official University of Sydney → KAIST
conversion formula was found. The website therefore keeps the original Australian
record as the primary academic evidence.


AMSI COURSE-TITLE CORRECTIONS
-----------------------------
For accuracy, the site uses the official AMSI titles:

2026
- Mathematical Optimisation Theory and Applications
  Dr Hoa T. Bui + Dr Vinesha Peiris

- Machine Learning in Financial Mathematics
  Dr Kihun Nam

2025
- Machine Learning and Data Science
  Prof Yiming Ying

The official 2026 AMSI course is NOT titled "Deep Learning Theory".


YONSEI WORDING
--------------
The site says "Course enrolments" rather than "courses completed":
- Intro to Entrepreneurship and Venture Capital
- AI and Society
- Developmental Psychology

The YISS Certificate of Completion is shown as evidence of the six-week program.
No public grade claims are made.


PRIVACY
-------
The raw USyd, Yonsei and Korea University transcripts have NOT been copied into
this public website package because they contain student IDs and/or other personal
information.

Use verified private transcript sharing (e.g. My eQuals) for admissions when needed.


INSTALLATION — 3 SMALL INDEX.HTML EDITS
---------------------------------------

1. HEAD

Immediately after:
  <link rel="stylesheet" href="style.css" />

and after your experience CSS if you already added it, add:

  <link rel="stylesheet" href="education/education.css" />


2. EDUCATION SECTION

Replace your entire existing:

  <section id="education" class="section">
    ...
  </section>

with the contents of:

  education/index-snippet.html


3. BOTTOM OF INDEX.HTML

Near </body>, after your other loader scripts, add:

  <script src="education/loader.js"></script>


UPLOAD
------
Upload the complete:
  education/

folder to the repository root.

Merge:
  assets/images/education/

into your existing assets/images/ directory.


YOU DO NOT NEED TO EDIT
-----------------------
- education.css
- education/loader.js
- any popup HTML file

They are already wired together.


EXPECTED REPOSITORY SHAPE
-------------------------
index.html
style.css

experience/
  ...

education/
  education.css
  loader.js
  index-snippet.html
  usyd-2024-2026.html
  yonsei-yiss-2026.html
  amsi-2025-2026.html
  korea-iwc-2025-26.html
  earlier-study.html

assets/
  images/
    education/
      yonsei/
      amsi/
      history/
