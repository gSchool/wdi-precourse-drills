'use strict'
//random color function declaration
const randomRGB = function() {return Math.floor(Math.random()* 256) - 10};
const randomColor = function() {
  let color = `rgb(`;
  color += `${randomRGB()},`;
  color += `${randomRGB()},`;
  color += `${randomRGB()})`;
  return color;
}

//random time function declaration
const randomTime = function() {return Math.floor(Math.random() * 1500) + 500};

//main animations
$(document).ready(function(){

  //hide content
  $('.socialMedia, #nav a').hide();

  //nav random color and fade
  $('#nav a').each(function (link){
    $(this).css('color', randomColor());
    $(this).fadeIn(randomTime(), 'swing');
  });

  //smooth scrolling
  $('.slideSection').click(function(e){
    let linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 900, 'swing');
    e.preventDefault();
  });

  //contact infomation slide
  $('.contact').on('mouseover', function(){
    $('.socialMedia').slideDown(300, 'swing');
  });
  $('.socialMedia').on('mouseleave', function(){
    $('.socialMedia').slideUp(300, 'swing');
  });
});
