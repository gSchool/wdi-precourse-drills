$( document ).ready(function() {

$( "#clickMe" ).click(function() {
  $("body").css({"background-image":"url('img/poland_background.jpg')" , "background-size":"cover", "font-size":"1.5em"});
  $("h1").css({"font-size":"2em", "padding-top":"2%"});
  $("h2").css({"font-size":"1.0em", "padding":"1%"});
  $(".quote").css({"background-color":"white", "opacity": "0.8", "padding":"10px", "margin":"1%", "font-style":"italic"});
  $(".aboutMe").css({"background-color":"white", "opacity": "0.8", "padding":"1%", "margin":"1%",});
  $('img').css('visibility', 'visible');
});

$( "#clickTwo" ).click(function() {
  $("body").css({"background-image":"url('img/poland_background1.jpg')" , "background-size":"cover", "font-size":"1.5em"});
  $("h1").css({"font-size":"2em", "padding-top":"2%", "color":"white"});
  $("h2").css({"font-size":"1.0em", "padding":"1%"});
  $(".quote").css({"background-color":"white", "opacity": "0.8", "padding":"10px", "margin":"1%", "font-style":"italic"});
  $(".aboutMe").css({"background-color":"white", "opacity": "0.8", "padding":"1%", "margin":"1%",});
  $('img').css('visibility', 'visible');
});
});
