$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) { // Adjust the scroll position as needed
            $('header.header').addClass('fixed');
        } else {
            $('header.header').removeClass('fixed');
        }
    });
    if (window.matchMedia("(max-width: 767px)").matches) {
        $("header.header .right-part .button-1").appendTo("header.header .navbar-nav");
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
    $('.coffee-style-section .coffee-style-slider, .comparision-section .comparision-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // variableWidth: true,
        dots: true,
        arrows:false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
      });
    }
});