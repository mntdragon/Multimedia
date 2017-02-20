var canvas = document.getElementById("drawingCanvas");
var drawingContext = canvas.getContext("2d");

var startPoint;
var mouse = {x: 0, y: 0};
drawingContext.lineWidth = 2;
drawingContext.lineJoin = 'round';
drawingContext.lineCap = 'round';
drawingContext.strokeStyle = 'green';
function getMousePos(canvas, evt)
{
  var rect = canvas.getBoundingClientRect();

  return{
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}

function DrawingMode(){
    drawingContext.lineTo(mouse.x, mouse.y);
    drawingContext.stroke();
}

canvas.addEventListener('mousemove', function(evet) {
  startPoint = getMousePos(canvas, event);
  mouse.x = startPoint.x;
  mouse.y = startPoint.y;
}, false);

canvas.addEventListener('mousedown', function(evt) {
    drawingContext.beginPath();
    drawingContext.moveTo(mouse.x, mouse.y);
 
canvas.addEventListener('mousemove', DrawingMode, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', DrawingMode, false);
}, false);

function clearCanvas(){
    drawingContext.clearRect(0,0, canvas.width, canvas.height);
}