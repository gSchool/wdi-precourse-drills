$(document).ready(function() {
  $(".aboutMe").on('click', 'button', function() {
    $('.me').slideToggle(800);

  });

});
window.setInterval(function(){

  var randomColor = '#'+ ('0000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

  $('body').css({
    'background-color' : randomColor,
  });

}, 500);
