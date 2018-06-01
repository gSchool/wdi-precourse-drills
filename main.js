    $('#denMap').hide();

$(document).ready(function(){
    $('#fish').click(function(){
        $(this).animate({height:"150px", width: "150px"})
    });
    
    $('.list').mouseenter(function(){
        $(this).css("background-color", "rgb(191, 245, 227)");
    });
    
    $('.past').on('click', 'button', function(){
        $('#denMap').slideToggle();
    });

    $('#gif').click(function() {
        $(this).toggle('explode');
    });

    $('p').addClass('narrow');
});