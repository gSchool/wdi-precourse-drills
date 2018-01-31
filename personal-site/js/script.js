$(document).ready(function () {
    $('#nav').on('mouseenter', 'li', function () {
        $(this).addClass('highlighted');
    })
    $('#nav').on('mouseleave', 'li', function () {
        $(this).removeClass('highlighted');
    })
})
