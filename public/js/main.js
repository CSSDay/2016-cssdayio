$(function() {

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('.page').addClass('scroll');
        } else {
            $('.page').removeClass('scroll');
        }
    });

    $('.primary-nav nav a').on('click', function() {
        $('#toggle-menu').prop('checked', false)
    })


})