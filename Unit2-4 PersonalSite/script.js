$(document).ready(function() {
  $('section').on('mouseenter','button', function() {
    $(this).toggleClass('highlight');
  });
  $('section').on('mouseleave','button', function() {
    $(this).removeClass('highlight');
  });
});
