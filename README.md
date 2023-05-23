# [AN INTERACTIVE PHOTO GALLERY](https://vercel.com/ajeso/photo-gallery).

\*This is Unit 5 project which entails creating a photo gallery using JavaScript and CSS Grid Layout.
\*At the top of the page, I have a search area where photos will hide and show depending on user input. When the user clicks on a thumbnail, the photo will display in a lightbox. There should be "back" and "previous" arrows to cycle through photos.

## INSTRUCTIONS

1. **Build the web page layout using HTML and CSS, using the layout in the gallery_mockup.png file.**

- Create a gallery using the provided thumbnail images.
- Create a search box field.
- Use CSS Grid to layout the thumbnail gallery.
- The design does not need to be exact, but the general spacing and arrangement of the elements should match the design of the mockups.

2. **Download and install the JavaScript lightbox plugin [baguetteBox.js](https://github.com/feimosi/baguetteBox.js/).**

- Structure your HTML to match the baguetteBox [usage documentation](https://github.com/feimosi/baguetteBox.js/#usage).
- Create a folder named `js`.
- Move the `baguetteBox.js` file into the `js` folder.
- Create an `app.js`file in the `js` folder.
- Add `<script>` tags to your `index.html` file above the closing `</body>` tag to import your JavaScript files.
  - **Remember:** Scripts are executed in the order they appear on the page so make sure your `app.js` file is imported last.
- Add `baguetteBox.run('.gallery');` into your `app.js` file.

3. **Utilize the included JavaScript search plugin searchFilter.js**

- The search box at the top of the page should filter photos based on the captions.
- The photos should filter in real-time as you type, and only display photos that match the search.

4. ** Make the CSS Grid thumbnail gallery responsive without utilizing media queries.**

5. **Write your own JavaScript code instead of using the included plugin for the search/content filtering requirement.**

6. **Make sure to check your code is valid by running it through an HTML and CSS validator.**

- Links to the validators can be found in the Project Resources. This will help you spot any errors that might be in your code.
- **There are a few exceptions that you don’t need to fix:**

  - Don’t worry about any warnings, we just need you to check any errors that might be there.
  - If CSS validator flags use of calc, vendor prefixes or pseudo-elements/pseudo-classes these errors should be ignored.
  - If HTML validator flags use of pipe (‘|’) in Google font links/URLs this error can also be ignored.
