$(document).ready(function(){
  	$('.pix').hover(function(){
  		$(this).toggleClass('blur');
      $(this).find("h2").toggleClass('name');
  	});
  });
