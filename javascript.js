// Mouseover Event Listeners

document.addEventListener('DOMContentLoaded', () => {

  const image = document.querySelector(".avatar");
  image.addEventListener("mouseover", (event) => {
    image.classList.toggle("avatar-circle");
    console.log(event);
  });
});

document.addEventListener('DOMContentLoaded', () => {

    const image = document.querySelector(".avatar");
    image.addEventListener("mouseleave", (event) => {
      image.classList.toggle("avatar-circle");
      console.log(event);
    });
  });

// Click Event Listener

document.addEventListener('DOMContentLoaded', () => {

  const image = document.querySelector(".avatar");
  image.addEventListener("click", (event) => {
    image.classList.toggle("avatar-circle");
    console.log(event);
  });
});

//   const button = document.querySelector(".btn-git");
//   button.addEventListener("click", (event) => {
//     button.classList.toggle("");
//     console.log(event);
//   });
// });
