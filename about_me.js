$(document).ready(function() {
  $("#surprise").on('click', function() {
    var top = Math.floor(Math.random() * 300) + "px";
    var left = Math.floor(Math.random() * 500)+ "px";
    $(this).animate({"top": top, "left":left}, 100);
  });
});
