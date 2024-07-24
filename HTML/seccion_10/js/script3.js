$(document).ready(function(){
    $('#paragraph').mouseenter(function(){
        $(this).css('background-color', 'yellow');
    }).mouseleave(function(){
        $(this).css('background-color', 'white');
    });
});
