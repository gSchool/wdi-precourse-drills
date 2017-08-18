// Slide mobile menu down
$(".menu-burger").click(function(){
    $(".mobile-menu").slideToggle(500);
});

/*Turn menu burger into a close 'X'*/
$(".menu-burger").click(function(){
    $("span:nth-child(1)").toggleClass("active-1");
    $("span:nth-child(2)").toggleClass("active-2");
    $("span:nth-child(3)").toggleClass("active-3");
});

// on hover, add crazy color class
// $('button').on('mouseover', function() {
//   $(this).addClass('soManyColors');
// });
// $('button').on('mouseleave', function() {
//   $(this).removeClass('soManyColors');
// });
