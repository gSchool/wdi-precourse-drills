$(document).ready(function() {

  //Position square in home to access nav options
  const moveSquare = () => {
    let origin = $('.square').position();
    let originX = origin['left'];
    let originY = origin['top'];
    $('.square').on('mousedown', function(){
      $('.square').on('mousemove', function(mover){
        $('.square').css('left', mover.pageX - 50);
        $('.square').css('top', mover.pageY - 50);
      });
      $('.square').mouseup(function(setter){
        let sqPos = $('.square').position();
        let sqPosX = Math.round(sqPos['left']);
        let sqPosY = Math.round(sqPos['top']);
        let homePos = $('.square-home').position();
        let homePosX = Math.round(homePos['left']);
        let homePosY = Math.round(homePos['top']);
        if (sqPosX > homePosX &&
            sqPosX < homePosX + 21 &&
            sqPosY > homePosY &&
            sqPosY < homePosY + 21) {
              console.log(true);
              $('.square').hide();
              $('.square-home').slideUp();
              $('.game').find('p').text("You got it!");
        }
        else {
          $('.square').css('left', originX);
          $('.square').css('top', originY);
        }
        $('.square').off();
        moveSquare();
      });
    });
  };

  const update = () => {
    $(document).on("scroll", moveSquare());
  };

moveSquare();

});
