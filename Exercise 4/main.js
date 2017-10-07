$("document").ready(function() {
  var leftBubbles = $('.who, .new')
  var rightBubbles = $('.p2')
  var toggle = true

  $('#redButton').click(function (event) {
    if (toggle) {
      leftBubbles.css('background-color', 'aquamarine')
      rightBubbles.css('background-color', '#DAA520')
    return toggle = false
    } else {
      leftBubbles.css('background-color', '#DAA520')
      rightBubbles.css('background-color', 'aquamarine')
      return toggle = true
    }

  })
});
