$(document).ready(function() {
  //alert("test");


  $('.doitbutton').on('mouseenter', function() {
    $('.goat').toggleClass('showgoat');
  });
  $('.doitbutton').on('mouseleave', function() {
    $('.goat').toggleClass('showgoat');
  });


  $('.button').on('mouseenter', function() {
    $(this).toggleClass('hover');
    //$(this).animate({"width": "200px","height": "100px"});

  });

  $('.button').on('mouseleave', function() {
    $(this).toggleClass('hover');
  });
  // add a new event handler
});
