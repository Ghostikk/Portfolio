// вызов модального окна по классу data

// $('[data-modal="consultation"]').on("click", function () {
//   $(".overlay, #thanks").fadeIn("slow");
// });

// закрытие модального окна для классов (id)

// $(".modal__close").on("click", function () {
//   $(".overlay, #consultation, #thanks").fadeOut("slow");
// });

$(document).ready(function () {
  // отправка формы на сервер
  $("form").submit(function (e) {
    e.preventDefault();

    /*условие для валидации, если вал. не прошла, прекращаем выполнение */

    /*if (!$(this).valid()) {
       return;
    }*/

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");

      $("form").trigger("reset");
    });
    return false;
  });
});
