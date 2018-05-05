$(document).ready(function() {
  $('.overlayContent img').hide(0).delay(1000).fadeIn(2500).stop();

  $('.aboutMeImages img').hover(function() {
        $(this).addClass('transition');
    }, function() {
          $(this).removeClass('transition');
    });
});
