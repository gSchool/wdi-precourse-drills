$(document).ready(function () {
  $('button').on('click', function() {
    $('ul').show("slow");
    $('button').remove();
  });
});
