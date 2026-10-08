BHAIYA BIRTHDAY WEBSITE — QUICK GUIDE

This is a brand-new project and is NOT the old photogifthub project.

FILES:
- index.html = website
- style.css = design
- script.js = navigation + music + photo auto-loader
- assets/birthday-song.mp3 = your uploaded song
- assets/photo1.jpg and photo2.jpg = the two photos you uploaded

ADDING THE OTHER 18 PHOTOS:
Rename your remaining photos:
photo3.jpg
photo4.jpg
...
photo20.jpg

Put them inside the "assets" folder. You do NOT need to edit HTML or JavaScript.
When the page loads, the site checks for photo3.jpg through photo20.jpg and adds whichever files exist.

GITHUB:
Upload the complete folder contents to a NEW GitHub repository (or a new folder/repository of your choice).
Do not mix this with the old photogifthub project.
Enable GitHub Pages from Settings > Pages > Deploy from branch > main > / (root).

SONG:
The song is already included. It starts when the user presses "Open ❤️" because browsers generally block autoplay before a user interaction.
The same audio element is used across the slides, so navigation does not restart the song.
