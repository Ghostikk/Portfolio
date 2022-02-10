$(document).ready(function () {
  //Modal
  // вызов модального окна по классу data
  $('[data-modal="consultation"]').on("click", function () {
    $(".overlay, #thanks").fadeIn("slow");
  });
  // закрытие модального окна для классов (id)
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
      alert("Ваше сообщение отправлено!");
      $("form").trigger("reset");
    });
    return false;
  });
});

// if (!$(this).valid()) {
//   return;
// }
