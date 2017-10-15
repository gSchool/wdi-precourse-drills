$(document).ready(function () {

  $('body').find('img').on('mouseenter', function () {
    $(this).animate({'opacity': '0.5'}, 'fast');
  });

  $('body').find('img').on('mouseleave', function () {
      $(this).animate({'opacity': '1'}, 'fast');
  });

  $('div').find('.next-icon').on('mouseenter', function () {
    $(this).css({'opacity': '0.5'}, 'fast');
  });

  $('div').find('.next-icon').on('mouseleave', function () {
    $(this).css({'opacity': '1'}, 'fast');
  });
});
