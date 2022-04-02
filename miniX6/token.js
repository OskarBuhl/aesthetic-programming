
class Bomb {
    constructor()
    {
    this.speed = floor(random(2,10));
    this.size = floor(random(20,55));
    this.pos = new createVector(random(0,width), 0);
    }
  fall(){
    this.pos.y += this.speed;
  }
  show() {
    image(bombImage,this.pos.x,this.pos.y,this.size, this.size);
 }
}

// class Building{
//
//   show(){
//     imageMode(CENTER);
//     image(building,mouseX,mouseY,100,100);
//   }
// }
