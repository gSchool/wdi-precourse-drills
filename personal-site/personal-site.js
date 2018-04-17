$(function() {
  $('.expandable').on({
    click: function() {
      $(this).toggleClass('grow')
    }
  });

  $('button').addClass("animated shake");
});
