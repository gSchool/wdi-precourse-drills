$(document).ready(function() {
  $('.text').mouseenter(function() {
    $('.text').fadeTo('fast', 1);
  })
  $('.text').mouseleave(function() {
    $('.text').fadeTo('fast', 0.5);
  })
})
