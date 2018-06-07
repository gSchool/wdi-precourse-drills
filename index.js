

$("#AboutMe").click(function(){
   $('html, body').animate({
       scrollTop: $("#div2").offset().top-50
   }, 200);
});

$("#Home").click(function(){
  $('html, body').animate({
    scrollTop: $('#div1').offset().top-50
  }, 200);
})

$(".menu").click(function() {
  // remove classes from all
  $(".menu").removeClass("active");
  // add class to the one we clicked
  $(this).addClass("active");
});


$("#Info").click(function(){
  $('html, body').animate({
    scrollTop: $('#div2').offset().top-50
  }, 200);
})

$("#sectionX").click(function(){
  $('html, body').animate({
    scrollTop: $('#div3').offset().top-50
  }, 200);
})
