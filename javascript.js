// Avatar click toggle
const avatar = document.querySelector(".avatar");
if (avatar) {
  avatar.addEventListener("click", () => {
    avatar.classList.toggle("avatar-circle");
  });
}

// Generic toggle for all buttons
const toggleButtons = document.querySelectorAll(".btn-toggle");
toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

// Optional: touch feedback for mobile (slight animation)
toggleButtons.forEach((btn) => {
  btn.addEventListener("touchstart", () => {
    btn.classList.add("active");
  });
  btn.addEventListener("touchend", () => {
    btn.classList.remove("active");
  });
});
