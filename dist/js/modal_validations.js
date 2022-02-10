$(document).ready(function () {
  //Modal
  // вызов модального окна по классу data
  $('[data-modal="consultation"]').on("click", function () {
    $(".overlay, #thanks").fadeIn("slow");
  });
  // закрытие модального окна для классов (id)
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #thanks").fadeOut("slow");
  });

  // валидация форм
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        text: {
          required: true,
          minlength: 50,
        },
        tel: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {2} символа!"),
        },
        tel: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты",
        },
        text: {
          required: "Пожалуйста, введите ваше сообщение",
        },
      },
    });
  }

  validateForms(".contacts__form");

  // отправка формы на сервер
  $("form").submit(function (e) {
    e.preventDefault();

    //условие для валидации, если вал. не прошла, прекращаем выполнение
    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST", // отправляем данные
      url: "mailer/smart.php", //куда направляем
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $(".overlay, #thanks").fadeOut();
      $(".contacts__form").trigger("reset");
    });
    return false;
  });

  // появления якоря после прокрутки в 2000 пикселей (незабыть привязать id к той секции на которую нужно проскролить)
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  // скрипт плавной прокрутки
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
});
