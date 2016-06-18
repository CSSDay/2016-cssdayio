$(function() {

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            $('.page').addClass('scroll');
        } else {
            $('.page').removeClass('scroll');
        }
    });

    $('.menu-on').on('click', function() {
        $('.page').addClass('show-menu');
    })

    $('.menu-off-tint, .menu-off-button, .primary-nav nav').on('click', function() {
        $('.page').removeClass('show-menu');
    })

})