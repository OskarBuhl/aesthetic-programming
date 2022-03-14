let space = 10;
let x = 0;
let y = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(random(180,255),random(180,255),random(180,255));
  frameRate(40);

}

function draw(){
  stroke(random(0,200),random(0,200),random(0,200));
  strokeWeight(2)
  if (random(1)<0.5){
    line(x,y+space, x+space,y);
  } else {
    line(x,y, x+space, y+space)
  }

  x+=space;
  if(x > width) {
    x = 0;
    y+=space;
  }
}
