$(document).ready(function() {
  $("button").click(function(){

   $('#zombie').toggle()
 });
$("button").on("click", function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
});
});
// $("button").toggle(function() {
//     $("this").text("DON'T PUSH ME");
// }, function() {
//     $("this").text("PUSH ME");
// });
