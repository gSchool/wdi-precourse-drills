$(document).ready(function() {
  $('section').on('mouseenter','.button', function() {
    $(this).toggleClass('highlight');
  });
  $('section').on('mouseleave','.button', function() {
    $(this).toggleClass('highlight');
  });
  $('.aboutMe').on('click','h2', function() {
    $('aside').animate({top: '-5px'}, 'fast');
    $('aside').animate({top: '5px'}, 'fast');
  });
});
