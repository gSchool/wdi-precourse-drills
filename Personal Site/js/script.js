$(document).ready(function() {
  //Set height and width of some elements based on window size
  $(window).on("resize", function() {
    var winHeight = $(window).height();
    $("#sideface img").height(winHeight);
    $("#sideface img").width(winHeight / 1.55);
    $("#title1").height(winHeight * 0.4);
    $("#title2").height(winHeight * 0.4);
    $("#arrow").height(winHeight * 0.2);
    $("#arrow img").height(winHeight * 0.1);
    if ($("#arrow img").height() > 30) $("#arrow img").height(30); //max arrow height
    $("#giphy").css("height", ($(window).width() * 0.3));
    $("#giphy").css("width", ($(window).width() * 0.4));
  }).trigger("resize"); //this last trigger("resize") sets the size on page load

  /*Paired with related sections in html and css files, fades in the page after loaded.
  Borrowed from https://www.abeautifulsite.net/a-clean-fade-in-effect-for-webpages */
  $('body').removeClass('fade-out');

  /*Next set of code handles fading the side picture image when page is scrolled.*/
  $(document).on("scroll", function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      $("#grayed").fadeIn("slow");
    } else {
      $("#grayed").fadeOut("slow");
    }
  });

  /*Button click handler*/
  $("button").click(function() {
    $("#gif").slideToggle();
  });
});
