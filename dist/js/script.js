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

  // автоматический пересчет уровня скила в зависимости от %
  // получаем значения со всех селекторов документа
  // выбираем ближайщий селектор в котором будет span
  // перебираем каждый элемент в массиве с конкретным номером [] и меняем инлайн стиль (ширину) в завивсимости от содержимого (innerHTML)
  const counters = document.querySelectorAll(".experience__progress-percent"),
    lines = document.querySelectorAll(".experience__progress-strip span");

  counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });
});
