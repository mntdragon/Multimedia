var bg = window.innerWidth -260;
//Moving left to right
function moveRight(){
    $('#cartoon').animate({
    left: "+=" +bg},
    9500, moveLeft)
    }
//Moving Right to left
function moveLeft(){
    $('#cartoon').animate({
    left: "-=" +bg},
    9500, moveRight)
    }
function loader(){
    $("#loader").delay(3000).fadeOut("slow");
}    
$(document).ready(function() {
    loader();
    moveRight();
    
});


