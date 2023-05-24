baguetteBox.run(".gallery");

const searchInput = document.getElementById("search");
const figuresArray = document.querySelectorAll("figure");

if (figuresArray && Array.from(figuresArray).length > 0) {
  const captionsArray = Array.from(figuresArray).map((figure, index) => {
    return {
      index,
      caption: figure.querySelector("a").dataset.caption
        ? figure.querySelector("a").dataset.caption.toLowerCase()
        : "",
    };
  });

  if (searchInput) {
    searchInput.addEventListener("keyup", (event) => {
      const inputValue = event.target.value.toLowerCase();

      const matchedCaptions = captionsArray.filter((captionObject) => {
        return captionObject.caption.includes(inputValue);
      });

      const matchedImagesIndex = matchedCaptions.map((matched) => {
        return matched.index;
      });

      // Update the DOM based on the matched content
      Array.from(figuresArray).forEach((figure, index) => {
        if (!matchedImagesIndex.includes(index)) {
          figure.classList.add("hidden");
        } else {
          figure.classList.remove("hidden");
        }
      });
    });

    // When the search reset is clicked, show everything
    searchInput.addEventListener("search", () => {
      Array.from(figuresArray).forEach((figure) => {
        figure.classList.remove("hidden");
      });
    });
  }
}
