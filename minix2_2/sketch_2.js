let num = 2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(170, 198, 230);
  fill(255,0,0)
  noStroke()
  ellipse(600,200,200)
  ellipse(300,200,200)
  ellipse(900,200,200)

}
function draw() {

  stroke(255);
  strokeWeight(2)
  if (mouseIsPressed === true) {
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function variableEllipse(x, y, px, py){
  let speed = abs(x-px) + abs(y-py);
  stroke(speed);
  fill(255);
  noStroke();
  ellipse(x,y,speed,speed);
}
