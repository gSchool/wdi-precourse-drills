$(document).ready(function() {
  $('.popout').on('click', function(){
    var gif = '<p><img class="gif" src="cool-cool-cool.gif"><p>';
    $('.gif-div').append(gif);
    $(this).remove();
  })
});
