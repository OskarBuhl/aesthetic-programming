//Made variabel
let detailX;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  //This is the setup for the sphere to rotate.
  //I tried to delete the slider, but then the it couldn't
  //read the next lines.
  detailX = createSlider(10, 54, 20);
  //Positioning of sphere
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
}

function draw() {
  background(190, 198, 196);

  //ambient light: black background for sphere.
  ambientLight(0,4,1);

  //variables to calculate distance from center to mouseX
  let lightX = mouseX - width / 2;
  let lightY = mouseY - height / 2;

  // warm orange color to resembles the danish term "hygge".
  // axis located at lightX, lightY, 500
  // axis direction of light: 0, 0, -1
  spotLight(228, 102, 51, lightX, lightY, 500, 0, 0, -1);

  // rotate on X axis
  rotateX(-PI/4);
  // rotate on Y axis
  rotateY(PI/4);

  rotateY(millis() / 2500);


  sphere(100, detailX.value(), 16);

}
//Reference link: https://p5js.org/examples/lights-mixture.html
//for the ambientLight effect. There's no creator name:(.
