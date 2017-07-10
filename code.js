$(document).ready(function() {
  $("button").on("click", function(){
    var imgUrl = $(this).data('rel');
    $("button").html("<img src='" + imgUrl + "' alt='Vail Mountains' />");
  });
});
