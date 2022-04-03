
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

function preload(){ //loading my images
  bombImage = loadImage("bomb.webp");
  building = loadImage("building.png");
  pic = loadImage("pic.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(255);
  push(); //Creating background
  translate(500,390)
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
  stroke(255,0,0);
  strokeWeight(3);
  textSize(50);
  textAlign(CENTER);
  text('Score', width-150,50);
  text(score,width-50,50);
  text('Lives:', width-150,100);
  text(health, width-50,100);
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
    // life--;
    bomb.splice(i,1);
  } else if (bomb[i].pos.x < 3){
    score++;
    bomb.splice(i,1);
    print("hej")
    }
  }
}

function lose(){
  if (health <= 0){
    fill(255,0,0);
    noStroke();
    textSize(40);
    text('GAME OVER:( REFRESH TO PLAY AGAIN', width/2, 300);
    noLoop();

  }
}
