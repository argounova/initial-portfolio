$( document ).ready(function() {
    console.log( "ready!" );

$('#image1b').on('mouseenter', function(){
    $('#image1b').toggle();
    $('#image1a').toggle();
});
$('#image1a').on('mouseleave', function(){
    $('#image1a').toggle();
    $('#image1b').toggle();
});


});