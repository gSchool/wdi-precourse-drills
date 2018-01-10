$(document).ready(function() {
  $("#surprise").on('mouseenter', function() {
    var top = Math.floor(Math.random() * 300) + "px";
    var left = Math.floor(Math.random() * 500)+ "px";
    $(this).animate({"top": top, "left":left}, 700);
  });
  $("#surprise").on('click', function() {
    alert("Ahh, you got me!");
  });
});
