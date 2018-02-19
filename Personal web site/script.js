$(document).ready(function() {
  $('.interests').on('click', 'button', function() {
    var interests = $(this).closest('.interests');
    var reveal = interests.data('reveal');
    var message = $('<span>' + reveal + '</span>');
    interests.append(message);
    $(this).remove();
  });
});
