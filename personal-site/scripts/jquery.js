$(document).ready(function() {
  //Always position footer below window height
  const positionFooter = () => {
    let height = $(document).height();
    $('.container').css('height', height);
    $(document).on('resize', function() {
      height = $(window).height();
      $('.container').css('height', height);
    });
  }
  positionFooter();
});
