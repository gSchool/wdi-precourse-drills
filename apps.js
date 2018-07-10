

$(document).ready(function() {
  $('#column').on("click", 'button', function () {
      $(this).closest('#column').find('.dialoge').slideToggle();
  });
});
