(function ($) {
  "use strict";

  $(function () {
    $(".primary-cta, .ghost-link, .card-arrow, .hero-nav a").on("click", function () {
      $(this).trigger("blur");
    });
  });
})(jQuery);