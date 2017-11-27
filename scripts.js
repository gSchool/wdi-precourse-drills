$(document).ready(function(){
  $('button').on('click',function(){
    var change = $('<button>Hey cool, it changed.</button>');
  $(this).append(change);
  })
});
