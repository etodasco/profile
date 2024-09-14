document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector(".avatar");
  image.addEventListener("mouseover", (event) => {
    image.classList.toggle("avatar-circle");
    console.log(event);
  });
});