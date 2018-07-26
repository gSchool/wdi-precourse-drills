function main() {

//Introduction effects

  $('#name1').hide();
  $('#name2').hide();
  $('#introText').hide();
  $('#name1').fadeIn(2000);
  $('#name2').fadeIn(2000);
  $('#introText').fadeIn(2000);

//Scroll to different sections
  $(".scrollUp").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#top').offset().top}, 500);
  });

  $(".scroll1").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#jump1').offset().top}, 500);
  });

  $(".scroll2").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#jump2').offset().top}, 500);
  });

}

//callback
$(document).ready(main);
