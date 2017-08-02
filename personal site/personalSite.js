function main() {
  var thePhoto = 0;
  var photos = ["early.jpg",
    "brothers.jpg",
    "brothers2.jpg"
  ];

  $('#photos').on('click', function() {
    for (var i = 0; i < photos.length; i++) {
      if ($('.famphoto').attr("src") === photos[i]) {
        thePhoto = i + 1;
        break;
      }
    }
    if (thePhoto >= photos.length) {
      thePhoto = 0;
    }
    $('.famphoto').attr("src", photos[thePhoto]);
  });
}

$(document).ready(main);
