$(document).ready(function() {
  var h1 = $("h1");
  h1.animate({
    left: '500'
  }, {
    duration: 3000,
    queue: false
  });
  h1.animate({
    fontSize: '135px'
  }, {
    duration: 3000,
    queue: false
  });
  // console.log($('html')children.length);
});

var headshot = $("#headshot");
var p2Image = $("<img>")
p2Image.attr('src', "https://2.bp.blogspot.com/-sZToUtjOv4w/Vpzd5wpSR3I/AAAAAAAAAOU/KyidB1v4CoY/s640/DSC00696.jpg");
p2Image.attr('width', '200');
p2Image.attr('align', 'center');
p2Image.addClass('imageShadow');
headshot.append(p2Image);
p2Image.animate({
  width: '500'
}, 3000);


var imgUrlArray = ['https://2.bp.blogspot.com/-nwD5SlLqpjw/Vpzf9CxllbI/AAAAAAAAAQ8/LMTgN9hbXsc/s640/IMG_8208.jpg', 'https://4.bp.blogspot.com/-V0flhHz24x8/Vpzf4mL7wVI/AAAAAAAAAQ0/g-wmWO2pxu0/s640/IMG_8215.jpg', 'https://3.bp.blogspot.com/-r1gOylygujk/VpzfnK5a3EI/AAAAAAAAAPM/JuhST-sbmzE/s640/IMG_1333.jpg', 'https://2.bp.blogspot.com/-Getf-TctuUU/VpzfpUOgILI/AAAAAAAAAPw/G5BTKDAnA5w/s640/IMG_1393.jpg', 'https://4.bp.blogspot.com/-rCDZA3kfqv8/Vpzfn0ujAsI/AAAAAAAAAPQ/0Q2rLQtk2KU/s640/IMG_5268.jpg', 'https://3.bp.blogspot.com/-T5C0wdrdiBQ/VpzfoqBeuKI/AAAAAAAAAPg/eG73dKQqGFg/s640/IMG_7328.jpg', 'https://1.bp.blogspot.com/-NrbgS1b52X0/VpzfpSZ-LQI/AAAAAAAAAPs/MDzEKQIPzyc/s640/IMG_7585.jpg', 'https://2.bp.blogspot.com/-N6cTqXCfb1w/Vpzfphn6QSI/AAAAAAAAAP0/DrikSIoVRbY/s640/IMG_7676.jpg', 'https://1.bp.blogspot.com/-ZfPBVhdDGOw/Vpzf26Y-v7I/AAAAAAAAAQs/XzDJReFAOgU/s640/IMG_8005.jpg', 'https://1.bp.blogspot.com/-XmC4Hx2UrZA/VpzgFtwZirI/AAAAAAAAARY/LUZKo4qMMNI/s640/IMG_8296.jpg'];

var gifArray = ["https://giphy.com/embed/adUv6OrYxCH4Y"
,
  "https://giphy.com/embed/JIX9t2j0ZTN9S"
  ,
  "https://giphy.com/embed/3o7TKzvWqnLjZ32EQ8"
  ,
  "https://giphy.com/embed/HCK7W8Qb52ifS"
  ,
  "https://giphy.com/embed/s51emEm5LhO3S"
];


function imageDisplay() {
  var counter = 0;
  setInterval(function() {
    var p3 = $('p3')
    p3.empty();
    var imgTag = $('<img>');
    if (counter < imgUrlArray.length) {
      imgTag.attr('src', imgUrlArray[counter]);
      imgTag.addClass('imageShadow');
      p3.append(imgTag);
      imgTag.fadeIn(3000);
      imgTag.delay(2000);
      imgTag.animate({
        left: 100
      }, {
        duration: 1000,
        queue: false
      });
      imgTag.animate({
        bottom: 100
      }, {
        duration: 1000,
        queue: false
      });
      imgTag.fadeOut(1000);
      counter++
    }
    if (counter === imgUrlArray.length) {
      counter * 0;
    }
  }, 6000)
}
imageDisplay();

var i = 0;
function gifChange(){
  var iframe = $('iframe');
  iframe.attr('src', gifArray[i]);
  i++;
  console.log("am i working?");
};

// var button = $('.gifButton');
// button.onclick = function(){gifChange()};

// var button = $('button');
// button.addEventListener('click', function(e) {
//       gifChange();
//     });
