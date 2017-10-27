$(document).ready(function() {
  $('.topbar').on('mouseenter', 'li', function() {
    $(this).addClass('highlight');
  });
  $('.topbar').on('mouseleave', 'li', function() {
    $(this).removeClass('highlight');
  });
  $('.contact').on('mouseenter', 'li', function() {
    $(this).addClass('highlight');
  });
  $('.contact').on('mouseleave', 'li', function() {
    $(this).removeClass('highlight');
  });
  $('.goals').on('mouseenter', 'h3', function() {
    $(this).addClass('highlight');
  });
  $('.goals').on('mouseleave', 'h3', function() {
    $(this).removeClass('highlight');
  });
  $('.goals').on('click', 'h3', function() {
    if ($(this).closest('li').find('img').attr('style') === 'display: inline-block;') {
      $(this).closest('li').find('img').slideUp();
    } else {
      $(this).closest('ul').find('img').slideUp();
      $(this).closest('li').find('img').slideDown();
    }
  });
});
