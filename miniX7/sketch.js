
buildingSize = {
  w:100, h:100
};
let pic;
let bomb = [];
let bombImage;
let minBomb = 25;
let building;
let score = 0;
let health = 3;
let button;
let color1;
let color2;
let color3;
let mySound;

function preload(){ //loading my images
  bombImage = loadImage("bomb.webp");
  building = loadImage("building.png");
  pic = loadImage("pic.png");
  soundFormats('mp3');
  mySound = loadSound("explosion.mp3");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  color1 = color(255, 0, 0)
  color2 = color(255, 0, 0)
  color3 = color(255, 0, 0)

}

function draw(){
  background(255);
  push(); //Creating background
  translate(550,390)
  image(pic,0,0,windowWidth,windowHeight);
  pop();
  checkBombNum();
  showBomb();
  checkBombFall();
  imageMode(CENTER);
  image(building,mouseX,mouseY,100,100);
  checkBombHit();
  lose();
  fill(0);
  stroke(0);
  strokeWeight(3);
  textSize(50);
  textAlign(CENTER);
  text('score:', width-200,50);
  text(score,width-100,50);
  text('lives:',100,80);
  push(); //Making the hearts
  strokeWeight(1);
    heart(200, 50, 30, color1)
    heart(240, 50, 30, color2)
    heart(280, 50, 30, color3)
  lifeCheck();
  pop();
  textSize(30);
  text('AVOID THE BOMBS!', width/2, height/2-300);
}

function checkBombNum(){ //creating the objects so they continuosly appear
  if(bomb.length < minBomb) {
    bomb.push(new Bomb(floor(random(2,5))));
  }
}

function showBomb(){
  for(let i = 0; i < bomb.length; i++){
    bomb[i].fall();
    bomb[i].show();
  }
}

function checkBombFall(){
  for (let i = 0; i < bomb.length; i++){
    if(bomb[i].pos.y > height){
      bomb.splice(i,1);
      score++;

    }
  }
}

function checkBombHit(){
  for(let i = 0; i < bomb.length; i++){
    let d = int(
      dist(mouseX,mouseY,
      bomb[i].pos.x, bomb[i].pos.y)
    );
  if (d < buildingSize.w/2){
    health--;
    bomb.splice(i,1);
    mySound.play();
  } else if (bomb[i].pos.x < 3){
    score++;
    bomb.splice(i,1);
    print("hej")
    }
  }
}

function heart(x, y, size, col) {
  beginShape();
  fill(col)
  strokeWeight(3)
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
function lifeCheck() {
  if (health === 3) {
    // color1 = color(255, 0, 0)
    // color2 = color(255, 0, 0)
    // color3 = color(255, 0, 0)
  } else if (health === 2) {
    color1 = color(255, 255, 255)
    // color2 = color(255, 0, 0)
    // color3 = color(255, 0, 0)
  } else if (health === 1) {
    color1 = color(255, 255, 255)
    color2 = color(255, 255, 255)
    // color3 = color(255, 0, 0)
  } else if (health === 0) {
    color1 = color(255, 255, 255)
    color2 = color(255, 255, 255)
    color3 = color(255, 255, 255)
  }
}

function lose(){
  if (health <= 0){
    fill(255,0,0);
    stroke(0);
    textSize(50);
    text('GAME OVER', width/2, height/2-100);
    text('YOUR SCORE', width/2, height/2);
    text(score, width/2,height/2+50);
    noLoop();
    button = createButton('PLAY AGAIN');
    button.position(width/2-150,height/2+200);
    button.style('background', '#ad0909');
    button.size(300,50);
    button.mousePressed(reloadCanvas);
function reloadCanvas(){
  window.location.reload(true);
    }
  }
}
