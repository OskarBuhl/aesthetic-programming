
var r = 0;
var status = "up";

function setup() {
 createCanvas(windowWidth, windowHeight);
 frameRate(30);
}

function draw() {
  background(200,150,100);
  for (var xcor = 0; xcor < width-50; xcor += 50){
    for (var ycor = 0; ycor < height-50; ycor += 50){
       drawSomething(xcor, ycor);
     }
  }

  //to keep increasing or decreasing the ellipses

  if (status == "up") {
  	r+=0.05;   //increase the size at a time
  }else{
  	r-=0.05;
  }

  //if it reaches certain size, change the direction
  if (r > 13){    //until r reaches a certain number, reset the status
   status = "down";
  }else if (r < 0) {
   status = "up";
  }
}

function drawSomething(x, y) {   // total horizontal ellipses (x axis = width/50); total vertical ellipses 19 (y axis = height/50) ) x2 ellipses (draw 2 ellipses at a time, see below)
  line(x+50, y+25, 50*r, 50*r);
  line(x+25, y+50, 50*r, 50*r);
}
//refference: https://editor.p5js.org/siusoon/sketches/4xCzybWK3
//
