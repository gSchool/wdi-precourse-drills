$(document).ready(function() {
  $(".content").hide();
  $(".social").hide();
  $(".button").click(function() {
    $(".content").fadeIn(2800);
    $(".social").fadeIn(5600);
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1600);
  });
});
