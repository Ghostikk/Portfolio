window.addEventListener("DOMContentLoaded", () => {
    /*объявляем переменные*/
    const hamburger = document.querySelector(".hamburger"),
      overlay = document.querySelector(".menu__overlay"),
      menu = document.querySelector(".menu"),
      closeElem = document.querySelector(".menu__close"),
      socity = document.querySelector(".socity_panel");

    /*по клику на переменную hamburger добавляем класс активности в menu и socity*/
      hamburger.addEventListener("click", () => {
          menu.classList.add("active");
          socity.classList.add("active");
    });

    /* убираем класс активности у переменных по клику на overlay*/
    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
        socity.classList.remove("active");
    });

    closeElem.addEventListener("click", () => {
        menu.classList.remove("active");
        socity.classList.remove("active");
    });
    /* убираем класс активности при нажамии на Esc */
    window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            menu.classList.remove("active");
        }
    });

  /* автоматический пересчет уровня скила в зависимости от % получаем значения со всех селекторов документа
  выбираем ближайщий селектор в котором будет span  перебираем каждый элемент в массиве с конкретным номером []
   и меняем инлайн стиль (ширину) в завивсимости от содержимого (innerHTML)*/
  const counters = document.querySelectorAll(".experience__progress-percent"),
      lines = document.querySelectorAll(".experience__progress-strip span");

  counters.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
  });

  const image = () => {
      const imgPopup = document.createElement('div'),
            workSection = document.querySelector('.sertificate'),
            bigImage = document.createElement('img'),
            subTitle = document.querySelectorAll('.title');

      imgPopup.classList.add('popup');
      workSection.appendChild(imgPopup);

      imgPopup.style.justifyContent = 'center';
      imgPopup.style.alignItems = 'center';
      imgPopup.style.display = 'none';

      imgPopup.appendChild(bigImage);


      workSection.addEventListener('click', (e) => {
          e.preventDefault();
          let target = e.target;
          if (target && target.classList.contains('sertificate__link-img')) {
              imgPopup.style.display = 'flex';
              const path = target.parentNode.getAttribute('href');
              bigImage.setAttribute('src', path);
              bigImage.style.maxWidth ='50%';
              bigImage.style.height ='auto';
              document.body.style.overflow = 'hidden';
              subTitle.forEach(item => item.style.display = 'none');
          }

          if (target && target.matches('div.popup')) {
              imgPopup.style.display = 'none';
              document.body.style.overflow = '';
              subTitle.forEach(item => item.style.display = 'block');
          }
      });
  };

  image();

});


$(document).ready(function () {
    /* появления якоря после прокрутки в 550 пикселей*/
        $("a[href=#page_up]").on("click", function (e) {
              const anchor = $(this);
              $("html, body")
                  .stop()
                  .animate({scrollTop: $(anchor.attr("href")).offset().top,},777);
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
    /* вызов модального окна с id #thanks при нажатой кнопке в форме */
    $("form").on("submit", function () {
       $(".overlay, #thanks").fadeIn("slow");
    });
    /* закрытие модального окна по клину на modal__close */
    $(".modal__close").on("click", function () {
       $(".overlay, #thanks").fadeOut("slow");
    });

// отправка формы на сервер
$("form").submit(function (e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          resetForm: "true",
          timeout: 2000,
          data: $(this).serialize(),
        }).done(function () {
          $(this).find("input").val("");
          /* alert("Ваше сообщение отправлено!"); - на всякий случай, если бы модальное окно не заработало*/
          $("form").trigger("reset");
        });
        return false;
    });
  });
