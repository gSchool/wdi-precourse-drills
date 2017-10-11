$(document).ready(function () {
  /* handle the click on the more buttons */
  if ('hello' == 'hello') {
    // alert("They are ==");
  }
  $("#morePreviousButton").on("click", function() {
    /* toggle the hidden content and switch the button title */
    if ($(this).html() == 'More') {
      $(this).html("Less");
      $(".previousToggleContent").fadeIn();
    } else {
      $(this).html("More");
      $(".previousToggleContent").fadeOut();
    }
  });
  $("#morePresentButton").on("click", function() {
    /* toggle the hidden content and switch the button title */
    if ($(this).html() == 'More') {
      $(this).html("Less");
      $(".presentToggleContent").fadeIn();
    } else {
      $(this).html("More");
      $(".presentToggleContent").fadeOut();
    }
  });

});
