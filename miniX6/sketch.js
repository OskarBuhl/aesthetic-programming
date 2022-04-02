buildingSize = {
  w:100, h:100
};
let pic;
let bomb = [];
let bombImage;
let minBomb = 6;
let building;
let score = 0;
let health = 3;
let s = 50;
let button;

// let buildingSize;

function preload(){
  bombImage = loadImage("bomb.webp");
  building = loadImage("building.png");
  pic = loadImage("pic.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(255);
  push();
  translate(500,390)
  image(pic,0,0,windowWidth,windowHeight);
  pop();
  // showBuilding();
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
  text('score', width-200,-100);
  text(score,width-50,50);
  push();
  strokeWeight(1);

  for (i = 0; i < 3; i += 50) {
    // for (y = 0; y < height; y += s) {
      fill(200, 0, 0);
      heart(50, 50, s/2, 3);
  }
  pop();
  textSize(30);
  text('AVOID THE BOMBS!', 500, 50);
}

// function showBuilding(){
//   building = new Building();
// }

function checkBombNum(){
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
  } else if (bomb[i].pos.x < 3){
    score++;
    bomb.splice(i,1);
    print("hej")
    }
  }
}

function heart(x, y, size, total) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
  this.total = total;
}

function lose(){
  if (health <= 0){
    fill(0);
    noStroke();
    textSize(50);
    text('GAME OVER', width/2, height+800);
    noLoop();
    button = createButton('PLAY AGAIN');
    button.position(width/2,height - 100);
    button.style('background', '#661616');
    button.size(300,50);
    button.mousePressed(reloadCanvas);
function reloadCanvas(){
  window.location.reload(true);
    }
  }
}
