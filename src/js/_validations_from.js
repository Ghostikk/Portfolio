$(document).ready(function () {
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
      // alert("Ваше сообщение отправлено!");
      $("form").trigger("reset");
    });
    return false;
  });
});
