// переключение табов
$(document).ready(function () {
  $("ul.section_catalog__tabs").on(
    "click",
    "li:not(.active_catalog__tab)",
    function () {
      $(this)
        .addClass("active_catalog__tab")
        .siblings()
        .removeClass("active_catalog__tab")
        .closest("div.wrapper")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );
});
