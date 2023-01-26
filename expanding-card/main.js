import "./style.scss";

const imageUiList = document.querySelectorAll(".image-wrapper");

function removeActiveClasses() {
  imageUiList.forEach((image) => {
    image.classList.remove("active");
  });
}

imageUiList.forEach((image) => {
  image.addEventListener("click", () => {
    removeActiveClasses();
    image.classList.add("active");
  });
});
