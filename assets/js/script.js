$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) { // Adjust the scroll position as needed
            $('header.header').addClass('fixed');
        } else {
            $('header.header').removeClass('fixed');
        }
    });
});