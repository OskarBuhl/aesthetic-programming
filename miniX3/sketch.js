//throbber
function setup() {
 //create a drawing canvas
 createCanvas(windowWidth, windowHeight);
 frameRate (8);  //try to change this parameter
}

function draw() {
  background(248, 235, 191,70);  //check this syntax with alpha value
  drawElements();
}

function drawElements() {
  let num = 12;
  push();
  //move things to the center
  translate(width/2, height/2);
  /* 360/num >> degree of each ellipse's movement;
  frameCount%num >> get the remainder that to know which one
  among 8 possible positions.*/
  let cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(102, 0, 0);
  //the x parameter is the ellipse's distance from the center
  ellipse(40, 10, 22, 22);
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//Reference: https://aesthetic-programming.gitlab.io/book/p5_SampleCode/ch3_InfiniteLoops/sketch3_1/
//By Winnie Soon
