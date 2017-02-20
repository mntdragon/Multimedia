var win = window.innerWidth -260;
//Moving left to right
function moveRight(){
    $('#cartoon').animate({
    left: "+=" +win},
    9500, moveLeft)
    }
//Moving Right to left
function moveLeft(){
    $('#cartoon').animate({
    left: "-=" +win},
    9500, moveRight)
    }
$(document).ready(function() {
    moveRight(); 
});