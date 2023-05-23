// get the alt text for all the images
// every time a key is pressed, filter the alt text that matches the content
// update the list of images based on that

const searchInput = document.getElementById("search");
const galleryFigures = document.querySelectorAll("figure");

if (galleryFigures && Array.from(galleryFigures).length > 0) {
  const altTextArray = Array.from(galleryFigures).map((figure, index) => {
    return {
      index,
      alt: figure.querySelector("img").getAttribute("alt").toLocaleLowerCase(),
    };
  });

  if (searchInput) {
    searchInput.addEventListener("keyup", (event) => {
      const inputValue = event.target.value.toLowerCase();

      const matchedImages = altTextArray.filter((altTextObject) => {
        return altTextObject.alt.includes(inputValue);
      });

      const matchedImagesIndex = matchedImages.map((matched) => {
        return matched.index;
      });

      // Update the DOM based on the matched content
      Array.from(galleryFigures).forEach((figure, index) => {
        if (!matchedImagesIndex.includes(index)) {
          figure.classList.add("hidden");
        } else {
          figure.classList.remove("hidden");
        }
      });
    });

    // When the search reset is clicked, show everything
    searchInput.addEventListener("search", () => {
      Array.from(galleryFigures).forEach((figure) => {
        figure.classList.remove("hidden");
      });
    });
  }
}
