
const burgerImage = document.querySelector(".burger-image");

if (burgerImage) {
  burgerImage.addEventListener("error", () => {
    console.error(
      "Burger image not found. Check that burger.png is in the same folder as index.html."
    );
  });
}
