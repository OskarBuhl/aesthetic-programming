let button;
let mic;
let ctracker;
let capturer;
// create an array to hold the DrawCircle objects
var circles = [];

function setup() {
  createCanvas(640,480);
  button = createButton("Like");
  button.style("color","#86AED1"); //e.g button.style("color", "#fff");
  button.size(100,40);
  button.position(50,50);
  button.mouseOut(revertStyle);
  button.mousePressed(change);
  //mic tracker
  mic = new p5.AudioIn();
  mic.start();
  //clmtrackr
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  //setup face tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(capture.elt);
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // circles[0] = new DrawCircle(320, 50, 180, 'red', 1);
  // circles[1] = new DrawCircle(120, 100, 100, 'green', 0.5);
  // print(circles);

  // create and initialize the instances of the DrawCircle object
  // populate the circles array with all the instances.
  for (var i = 0; i < 2; i++) {
    var x = random(width);
    var y = random(height);
    var d = random(20, 50);
    var c = color(random(255), random(255), 255);
    var s = random(0.2, 3);
  	circles[i] = new DrawCircle(x, y, d, c, s);
  }

}

//mouse capture
function change() {
  button.style("background", "#2d3f74");
  userStartAudio();
}
function revertStyle(){
  button.style("background", "#4c69ba");
}

function keyPressed() {
  //spacebar - check here: http://keycode.info/
  if (key == 32) {
    button.style("transform", "rotate(180deg)");
  } else {   //for other keycode
    button.style("transform", "rotate(0deg)");
  }
  if (keyCode == 37){
    button.style("transform", "rotate(90deg)")
  }
  if (keyCode == 38){
    button.style("transform", "rotate(180deg)")
  }
  if (keyCode == 39){
    button.style("transform", "rotate(270deg)")
  }
  if(keyCode == 40){
    button.style("transform", "rotate(0deg)")
  }
}
function mousePressed() {
  // click the mouse to create a new DrawCircle object and add it to the circles array
  var d = random(20, 50);
  var c = color(random(255), 240, random(255));
  var s = random(0.2, 3);
	var newCircle = new DrawCircle(mouseX, mouseY, d, c, s);
  circles.push(newCircle);
}

function draw() {
  //getting the audio data i.e the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  /*map the mic vol to the size of button,
  check map function: https://p5js.org/reference/#/p5/map */
  button.size(floor(map(vol, 0, 4, 50, 4000)));
  //draw the captured video on a screen with the image filter
  image(capture, 0,0, 640, 480);
  filter(INVERT);
  let positions = ctracker.getCurrentPosition();
  //check the availability of web cam tracking
  if (positions.length) {
     //point 60 is the mouth area
    button.position(positions[7][0]-20, positions[7][1]);
    push();
    fill(105,0,0);
    noStroke();
    ellipse(positions[62][0]-20, positions [62][1]);
    pop();

    /*loop through all major points of a face
    (see: https://www.auduno.com/clmtrackr/docs/reference.html)*/
    for (let i = 0; i < positions.length; i++) {
       noStroke();
       //color with alpha value
       fill(255,0,0,180);
       //draw ellipse at each position point
       ellipse(positions[i][0], positions[i][1], 5, 5);
     }
   }
   // calling the methods of the drawCircle object
  // circles[0].move();
  // circles[0].display();
  // circles[1].move();
  // circles[1].display();

  // iterate over the circles array and call the methods of the DrawCircle object
  for (var i = 0; i < circles.length; i++) {
  	circles[i].move();
    circles[i].display();
  }

  // keep the number of circles on the canvas under 60
  if (circles.length > 60) {
  	circles.shift();
  }

}

// *** DrawCircle object *** //
// --- parameters --- //
// x 			-> circle - x position (center)
// y 			-> circle - y position (center)
// d 			-> circle - diameter
// c 			-> circle - fill color
// s			-> circle - speed
function DrawCircle( x, y, d, c, s ) {
  // declare the properties
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
	this.color = c;
  this.speed = s;
}

DrawCircle.prototype = {
	constructor: DrawCircle,
  // *** Method: display the circle on the canvas ***
  display: function() {
    fill(this.color);
    ellipse(this.xPos,this.yPos, this.diameter, this.diameter);

    // uncomment the lines below and start building your own shape here!
    //rect(this.xPos,this.yPos, this.diameter/2, this.diameter);
    //stroke(0);
    //strokeWeight(this.diameter/6);
    //point(this.xPos, this.yPos);
  },

  // *** Method: move the circle downwards ***
  move: function() {
		this.yPos += this.speed;
    // the circle is outside the canvas, retset its position at the top
    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
    }
	}
}
function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}
