
function getAttributes ( $node ) {
  var attrs = {};
  $.each( $node[0].attributes, function ( i, a ) {
    console.log(i,a.name,a.value)
  });
}

$(document).ready(function() {
  $('.box').on('click','h3', function(){
    $(this).closest('.box').find('.box-content').fadeToggle();
  });
});
