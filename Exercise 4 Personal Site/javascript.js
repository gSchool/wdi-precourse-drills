$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top -20
      }, 1000);
      return false;

    }
  }
});


$(window).scroll(function(){
var st = $(this).scrollTop(),
    winH = $(this).height(),
    /* use add value to scroll past the element to fadeIn after you have scrolled by it */
    add = 400;

$('#section-resume').each(function(){
    var pos = $(this).position().top;

    if(st + winH >= pos + add){
        $(this).stop().animate({opacity:1, marginTop:10}, 300);
    }else{
        $(this).stop().animate({opacity:0, marginTop:0},'fast');
    }
});
});


$("button").click(function() {
    $("#section-aboutme").css("background-color","#232717");
});

