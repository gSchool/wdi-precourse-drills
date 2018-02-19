console.log("YOLO")

$(document).ready(function () {
    $('iframe').hide()
    
    $('#video').on('click', function () {
        console.log("clicked YO")
        $('#video').hide()
        // $('#vid').show()
        // Replace img value to iframe code here
        $('#video').replaceWith(
            '<iframe id="vid" src="https://player.vimeo.com/video/4006225#t=01m27s" data-vimeo-autoplay="false" data-vimeo-color="#ff9900" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
            '<p>A contest like no other,  the 8th annual log masters.  18 holes/logs, and only one coveted Green Jacket for the Master of the logs.  <br>Check it out.</p>',
            '<p><a href="https://vimeo.com/4006225">Log Jam 09</a> from <a href="https://vimeo.com/jamesonwalter">Jameson Walter</a> on <a href="https://vimeo.com">Vimeo</a>.</p>'
        )
        
    })
})