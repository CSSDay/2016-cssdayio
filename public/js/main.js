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
  });

  $('.menu-off-tint, .menu-off-button, .primary-nav nav').on('click', function() {
    $('.page').removeClass('show-menu');
  });

  $('.name, .image-wrap', '.speaker-list .speaker:not(.no-click)').on('click', function(e) {
    e.preventDefault();
    $('.page').addClass('show-profile');
    var speaker = $(this).data('speaker');
    $('.speaker.' + speaker).show();
  });


  $('.speaker-profiles-tint').on('click', function() {
    $('.page').removeClass('show-profile');
    $('.speaker-profiles .speaker').hide();
  });

})