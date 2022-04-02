
var r = 0;
var status = "up";

function setup() {
 createCanvas(windowWidth, windowHeight);
 frameRate(30);
}

function draw() {
  background(200,150,100);
  //grid of lines with distances in between
  for (var xcor = 0; xcor < width-50; xcor += 50){
    for (var ycor = 0; ycor < height-50; ycor += 50){
       drawSomething(xcor, ycor);
     }
  }

  //to move the center back and forth

  if (status == "up") {
  	r+=0.05;   //speed
  }else{
  	r-=0.05;
  }

  //if it reaches certain "size", change the direction
  if (r > 13){    //until r reaches a certain number, reset the status
   status = "down";
  }else if (r < 0) {
   status = "up";
  }
}

function drawSomething(x, y) {   //the lines with coordinates
  line(x+50, y+25, 50*r, 50*r);
  line(x+25, y+50, 50*r, 50*r);
}
//refference: https://editor.p5js.org/siusoon/sketches/4xCzybWK3
//
