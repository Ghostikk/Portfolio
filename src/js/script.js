window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    overlay = document.querySelector(".menu__overlay"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close"),
    socity = document.querySelector(".socity_panel");

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    socity.classList.add("active");
  });

  overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    socity.classList.remove("active");
  });

  closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
    socity.classList.remove("active");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      menu.classList.remove("active");
    }
  });
});
