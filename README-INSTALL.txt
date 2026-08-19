THOMAS WEBSITE — PROFESSIONAL & LEADERSHIP EXPERIENCE PACKAGE
==============================================================

WHAT IS INCLUDED
----------------
experience/
  experience.css
  loader.js
  index-snippet.html
  science-peer-mentor-2026.html
  incubate-startup-fundamentals-2026.html
  practera-saiep-2026.html

assets/images/experience/
  peer-mentor/
    certificate.jpg
    co-mentor-linkedin.jpg
    mentee-message.jpeg
  incubate/
    badge.jpg
    slack-introduction.jpeg
    founder-qa.jpg
    networking-session.jpg
  practera/
    team-call.jpg
    team-roles.jpg
    certificate.jpg

INSTALLATION — ONLY 3 INDEX.HTML CHANGES
-----------------------------------------

1) Upload the folders `experience/` and `assets/` to the ROOT of your GitHub Pages repository.
   Merge the provided `assets/` folder with your existing `assets/` folder. Do NOT replace/delete
   your current images.

2) In <head>, immediately AFTER your existing main stylesheet:

   <link rel="stylesheet" href="style.css" />

   add:

   <link rel="stylesheet" href="experience/experience.css" />

   You do NOT need to paste the experience CSS into style.css.

3) Replace your existing Work Experience placeholder with the contents of:

   experience/index-snippet.html

4) At the bottom of index.html, immediately after your other script tags and before </body>, add:

   <script src="experience/loader.js"></script>

That is all.

IMPORTANT
---------
- The detail files are HTML fragments loaded into a modal by loader.js. Do not open them as
  standalone pages and do not add <html>, <head>, or <body> around them.
- The popups require the site to be served over HTTP/HTTPS. They will work on GitHub Pages.
  Browser security may block fetch() if you double-click index.html locally using file://.
- If your existing Datathon popup also uses a global body.modal-open class, this package uses
  the separate class `experience-modal-open` to avoid conflicts.
- Your screenshots include other students/participants. They are included exactly as supplied.
  Before publishing publicly, consider whether you want to crop or blur names/faces that are
  not necessary to tell the story.

SOURCE LINKS USED IN THE DETAIL PAGES
-------------------------------------
Science Peer Mentoring:
https://mentoring.sydney.edu.au/p/p15/

Co-mentor LinkedIn reflection:
https://www.linkedin.com/posts/gabrielamichellevivaldi_peer-mentoring-2026-what-an-amazing-6-ugcPost-7449654399313870848-f0cK/

INCUBATE Startup Fundamentals:
https://incubate.org.au/proto/

Study Australia Industry Experience Program / Practera:
https://practera.com/saiep/
