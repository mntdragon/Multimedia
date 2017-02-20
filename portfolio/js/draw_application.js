var line = 1;
var rectangle = 2;

var currentDrawMode = line;

var canvas = document.getElementById("drawingCanvas");
var drawContext = canvas.getContext("2d");

var beginPoint;


function setDrawMode(newDrawMode){
    currentDrawMode = newDrawMode;
}

//transform mouse pointer cordinate from canvas
function getMousePosition(canvas, evt){
    var rect = canvas.getBoundingClientRect();

    //event.clientX:  Get the horizontal coordinate
    //event.cklientY: Get the vertical cordinate
    return{
        x : evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}

function bonnyMouseDown(event){
    beginPoint = getMousePosition(canvas, event);  
}

function bonnyMouseUp(event){
    //when press mouse, define starting point
    //store start point, when releas mouse, use start point instead of 0,0
    var currentMousePosition = getMousePosition(canvas, event);

    if(currentDrawMode == line){
        drawContext.beginPath();
        drawContext.moveTo(beginPoint.x, beginPoint.y);
        drawContext.lineTo(currentMousePosition.x, currentMousePosition.y);
        drawContext.stroke();
    }
    else if(currentDrawMode == rectangle){
        drawContext.beginPath();
        ////x, y, width and height
        drawContext.rect(beginPoint.x, beginPoint.y, currentMousePosition.x - beginPoint.x, currentMousePosition.y - beginPoint.y);
        drawContext.fill();
    }
}


function clearCanvas(){
    drawContext.clearRect(0,0, canvas.width, canvas.height);
}


canvas.addEventListener("mousedown", bonnyMouseDown);
canvas.addEventListener("mouseup", bonnyMouseUp);

//--------------------------------------------------------------------------------------------------------
//NOTE:
//"event.clientX: Retrieves the x-coordinate of the mouse cursor relative to the client area of the window,
// excluding window decorations or scroll bars."
//"event.x: Retrieves the x-coordinate of the mouse cursor relative to the parent element."
//--------------------------------------------------------------------------------------------------------