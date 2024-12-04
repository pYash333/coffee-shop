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
});