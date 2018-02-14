$(document).ready (function(){
  $("#cat").click (function() {
  var likeCats = confirm("Do you really like cats?");
    if (likeCats) {
      $("#catpics").show ();
    } else {
      $("#catpics").hide ();
      alert("How sad!")
    }
  })
});
