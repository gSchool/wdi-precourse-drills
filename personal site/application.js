$(document).ready(function(){

  $('.personalButton').on('click', function() {
    $('.personalPic').css('display', 'block');
  });

  $('.firstNav').on('click', function() {
    document.location.href='page2.html';
  });

  $('.secondNav').on('click', function() {
    document.location.href='index.html';
  });

});
