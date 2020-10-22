var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1300,400);
  bullet = createSprite(500, 200, 20, 10);
  bullet.shapeColor = "white";
  bullet.velocityX  = 15;

  wall   = createSprite(1000, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  thickness = random(20, 80);
  speed     = random(223,321);
  weight    = random(30, 52);
}

function draw() {
  background(0);  
  drawSprites();

hasCollided();

}
function hasCollided(){
  if (bullet.isTouching(wall)){
    bullet.velocityX = 0;
if (thickness > 60){
  wall.shapeColor = "green"
}
if (thickness < 30){
  wall.shapeColor = "red"
}
if (thickness > 30 && thickness < 60){
  wall.shapeColor = "yellow"
}
  }
}