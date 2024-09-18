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

// Avatar click event Listener //

document.addEventListener('DOMContentLoaded', () => {

  const image = document.querySelector(".avatar");
  image.addEventListener("click", (event) => {
    image.classList.toggle("avatar-circle");
    console.log(event);
  });
});

// Button click event lister for each frontend button //
document.addEventListener('DOMContentLoaded', () => {

  const btn_git = document.querySelector(".btn-git");
  btn_git.addEventListener("click", (event) => {
    btn_git.classList.toggle("active");
    console.log(event);
    });
  });

document.addEventListener('DOMContentLoaded', () => {

  const btn_es6 = document.querySelector(".btn-es6");
  btn_es6.addEventListener("click", (event) => {
    btn_es6.classList.toggle("active");
    console.log(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {

  const btn_css = document.querySelector(".btn-css");
  btn_css.addEventListener("click", (event) => {
    btn_css.classList.toggle("active");
    console.log(event);
  });
});

  document.addEventListener('DOMContentLoaded', () => {

  const btn_html = document.querySelector(".btn-html");
  btn_html.addEventListener("click", (event) => {
    btn_html.classList.toggle("active");
    console.log(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {

  const btn_cdt = document.querySelector(".btn-cdt");
  btn_cdt.addEventListener("click", (event) => {
    btn_cdt.classList.toggle("active");
    console.log(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {

  const btn_heroku = document.querySelector(".btn-heroku");
  btn_heroku.addEventListener("click", (event) => {
    btn_heroku.classList.toggle("active");
    console.log(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {

  const btn_openai = document.querySelector(".btn-openai");
  btn_openai.addEventListener("click", (event) => {
    btn_openai.classList.toggle("active");
    console.log(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {

    const btn_copilot = document.querySelector(".btn-copilot");
    btn_copilot.addEventListener("click", (event) => {
      btn_copilot.classList.toggle("active");
      console.log(event);
      });
    });

  // Button click event lister for each frontend button //

  document.addEventListener('DOMContentLoaded', () => {

    const btn_backend_ruby = document.querySelector(".btn-backend-ruby");
    btn_backend_ruby.addEventListener("click", (event) => {
      btn_backend_ruby.classList.toggle("active");
      console.log(event);
      });
    });