$(document).ready(function() {
  $("img").hide().fadeIn(1500);
});

$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>My favorite color is blue!</span>');
    $(this).after(message);
    $(this).remove();
  });
});
