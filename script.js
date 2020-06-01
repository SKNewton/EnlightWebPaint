//set canvas id to variable
var canvas = document.getElementById("draw");

//Get canvas 2d context and set it to the correct size
var ctx = canvas.getContext("2d");
resize();

//resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}



//default position?
var pos = { x: 0, y: 0 };

//new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return;//if mouse is not clicked, do not go further

  var color = document.getElementById("hex").value;//retrieve the value of the input field in the html file and store it in the variable "color"

  ctx.beginPath(); //begin the drawing path

  //line properties
  ctx.lineWidth = 20; //width of line
  ctx.lineCap = "round"; // rounded line end
  ctx.strokeStyle = color;

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); //drawing?

}

//add window event listener to trigger when window is resized
window.addEventListener("resize",resize);

//add document event listener to trigger the draw() function when the mouse is moved
document.addEventListener("mousemove", draw);

//add a document event listener to trigger the setPosition() (user's current mouse position) function when the mouse is clicked
document.addEventListener("mousedown", setPosition);

//add a document event listener to the setPosition() (user's current position) 
document.addEventListener("mouseenter", setPosition);