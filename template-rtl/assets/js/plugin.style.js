
$(document).ready(function () {
    "use strict";
    // wow
  
    // new WOW().init();
  
    // nice scroll
    $(function () {
      $("html").niceScroll({
        cursorcolor: "#ecf0f1",
        cursorwidth: "12px",
        cursorborder: "3px solid #34495e",
        cursorborderradius: "10px",
        scrollspeed: "60",
      });
    });
});
// button scroll to top
$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        var buttonScroll = $(".scroll-to-top");
        if ($(window).scrollTop() >= 500) {
            if (buttonScroll.is(":hidden")) {
                buttonScroll.fadeIn(400);
            }
        } else {
            buttonScroll.fadeOut(400);
        }
    });
    $(".scroll-to-top").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
});

// start section loading
$(document).ready(function () {
    "use strict";

    $(".loading .spinner").fadeOut(1000, function () {
        $(this)
            .parent()
            .fadeOut(1000, function () {
                $(this).remove();
            });
    });
});
// end section loading

// start PRELOADER
$(document).ready(function () {
    "use strict";
    (function ($) {
        $(window).ready(function () {
            $("#preloader").fadeOut(3000);
        });
    })(jQuery);
});
// end PRELOADER

// start section loading
$(document).ready(function () {
    "use strict";

    $(".loading-parent .loading-child").fadeOut(2000, function () {
        $(this)
            .parent()
            .fadeOut(2000, function () {
                $(this).remove();
            });
    });
});
// end section loading 2

// start section loading 3
$(document).ready(function () {
    "use strict";

    $(".loading-parent-3 .loader-child").fadeOut(2000, function () {
        $(this)
            .parent()
            .fadeOut(2000, function () {
                $(this).remove();
            });
    });
});
// end section loading 3

// start section loading 4
$(document).ready(function () {
    "use strict";

    $(".loading-parent-4 .loader-child").fadeOut(2000, function () {
        $(this)
            .parent()
            .fadeOut(2000, function () {
                $(this).remove();
            });
    });
});
// end section loading 4

// start section loading 5
$(document).ready(function () {
    "use strict";

    $(".loading-parent-5 .loader-child").fadeOut(2000, function () {
        $(this)
            .parent()
            .fadeOut(2000, function () {
                $(this).remove();
            });
    });
});
// end section loading 5
