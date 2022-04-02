buildingSize = {
  w:100, h:100
};

let bomb = [];
let bombImage;
let minBomb = 6;
let building;
let score = 0;
let health = 3;
// let buildingSize;

function preload(){
  bombImage = loadImage("bomb.webp");
  building = loadImage("building.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);
  // showBuilding();
  checkBombNum();
  showBomb();
  checkBombFall();
  imageMode(CENTER);
  image(building,mouseX,mouseY,100,100);
  checkBombHit();
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
      dist(buildingSize.w,buildingSize.h/2,
      bomb[i].pos.x, bomb[i].pos.y)
    );
  if (d < buildingSize.w/2.5){
    health--;
    bomb.splice(i,1);
  } else if (bomb[i].pos.x < 3){
    score++;
    bomb.splice(i,1);
    print("hej")
    }
  }
}
