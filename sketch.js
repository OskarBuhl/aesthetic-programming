//Here i create variables that can be used later. These variables are used as coordinates (y-coordinate),
//and in the end to make this position move with the mouseWheel function.
let pos = -200;
let nos = 0;
let los = -200;
let sos = 100
let kos =-150
let bos =-150
//Setting up the canvas to fit the window in browser. I tried to play with text, but it didn't work.
function setup() {
  let canvas=createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("canvasBox");
}
//Here I'm drawing the figures and using the if statement "mouseIsPressed".
function draw() {
  background(180,64,16,);
  noStroke();
  if (mouseIsPressed) {
    fill(180,64,16);
  } else {
    fill(20,0,90);
  }
  rect(25,pos,100,100);
  ellipse(-25,nos,100,100)
  rect(-175,los,100,100)
  rect(-220,sos,400,100)
//Had to make a new one to give the iris another color.
  if (mouseIsPressed){
    fill(180,64,16);
  } else {
    fill(255);
  }
  noStroke();
  ellipse(75,kos,35,35)
  ellipse(-125,bos,35,35)
}
//Here I'm using the variables. This event.delta properties returns the amount the mouse have scrolled.
//The positive or negative value determinds which direction the figure will move.
//The propeties makes the figures move according to the same amount of vertical scroll amount.
function mouseWheel(event){
  print(event.delta);
  pos += event.delta;
  nos -= event.delta;
  los += event.delta;
  sos += event.delta;
  kos += event.delta;
  bos += event.delta;
}
