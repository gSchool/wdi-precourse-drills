/*jslint browser: true*/
/*jslint indent: 2*/
/*global  $, console*/

$(document).ready(function () {
  'use strict';
  var screenCenter = {
    'x': $(window).width() / 2,
    'y': $(window).height() / 2
  };
  console.log(screenCenter);
  $("#engage").click(function () {
    $("#picard").attr("src", "img/engage.gif");
    $("#warp")
      .css("z-index", 99)
      .delay(2300)
      .animate({
        opacity: 1,
        width: "2000px",
        height: "2000px",
        top: screenCenter.y - 1000,
        left: screenCenter.x - 1000
      }, 1000)
      .animate({opacity: 0.8}, 2000)
      .animate({opacity: 0.5}, 2000)
      .animate({opacity: 0}, 2000, function () {
        $(this).css({
          "z-index": "-99",
          "width": 0,
          "height": 0,
          "left": "50%",
          "top": "50%"
        }
          );
      });
  }
    );
});
