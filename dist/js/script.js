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

$(document).ready(function () {
  /* появления якоря после прокрутки в 550 пикселей*/
  $("a[href=#page_up]").on("click", function (e) {
    const anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top,
        },
        777
      );
    e.preventDefault();
    return false;
  });
  /*скролл  + изменение цвета панели с соц.сетями*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $(".pageup").fadeIn();
      $(".socity_panel__svg").css("fill", "black");
      $(".socity_panel__line").css("background", "black");
      $(".socity_panel__descr").css("color", "black");
    } else {
      $(".pageup").fadeOut();
      $(".socity_panel__svg").css("fill", "white");
      $(".socity_panel__line").css("background", "white");
      $(".socity_panel__descr").css("color", "white");
    }
  });
});
