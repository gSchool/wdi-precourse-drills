$(document).ready( function() {    
        // Image Opacity MouseEnter      
        $(".rounded-circle").on('mouseenter', function(){
        $(this).addClass('highlight');  
        });
        $(".rounded-circle").on('mouseleave', function(){
        $(this).removeClass('highlight');    
        });
        // Show Image Text
        $(".pro-content").on('click', function(){
        $(this).find('.pro-text').toggle('slow');    
        });
    });