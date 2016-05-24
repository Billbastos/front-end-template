(function() {

    var animate = true;

    var scrollerAnimation = function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - ($( window ).width() >= 1024 ? 129 : 80 )
            }, 800);
            return false;
        }
    }

    var showMobilePhone = function() {
        if ($(window).scrollTop() > 560 && $(window).scrollTop() < 1000 && animate) {
            animate = false;
            $('.bg-download').animate({
                left: "-=450",
                opacity: 1
            }, 1);
            return false;
        }
    }

    var showMenu = function(show) {
        return function() {
            if (show) {
              $("#sandwishList").css("display", "block");
            } else {
              $("#sandwishList").css("display", "none");
            }
        }
    }

    var prev = function() {
        $('#carousel-macho').carousel('prev');
        return false;
    }

    var next = function() {
        $('#carousel-macho').carousel('next');
        return false;
    }

    $(window).scroll(showMobilePhone);
    $('a[data-slide="prev"]').on('click', prev);
    $('a[data-slide="next"]').on('click', next);
    $('a[href*="#"]:not([href="#"])').on('click', scrollerAnimation);
    $('#sandwishMenu').hover(showMenu(true), showMenu(false));


})();
