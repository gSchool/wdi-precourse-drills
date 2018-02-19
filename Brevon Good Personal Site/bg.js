
// var padding = $(document).find(".band-position-0").height();
// var padding2 = $(document).find(".band .container").height();
// var offset = padding2 - padding;
// $(document).find(".footer").css("margin-top", offset);

$('.navbar-header').on('click', 'button', function() {
  $(document).find('.navbar-right').slideToggle();
});
