var iso = new Isomer(document.getElementById("drawing"));
var Shape = Isomer.Shape;
var Point = Isomer.Point;
var blue = new Isomer.Color(50, 60, 160);
var red = new Isomer.Color(160, 50, 60);
var cube = Shape.Prism(new Point(.5,.5,.5),red);
iso.add(cube)
iso.add(cube.translate(0, 0, 1.1), red);
iso.add(cube.translate(0, 0, 2.2), red);
iso.add(cube.translate(0, 0, 3.3), red);
iso.add(cube.translate(-.1, 1, -1), red);
iso.add(cube.translate(-1.2, 1, -1), red);
iso.add(cube.translate(-1.2, 1, .1), red);

$(function() {
    $(document).mousemove(function( event ) {
      $('.cube').toggleClass("crush");
    })
});
