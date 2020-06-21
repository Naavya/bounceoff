var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  game1=createSprite(600,550,70,43)
  game2=createSprite(470,430,90,62)
}

function draw() {
  background(0,0,0); 
game1.x=mouseX
game1.y=mouseY 
bounceOff(movingRect,fixedRect)
if(isTouching(game1,game2)){
  game1.shapeColor="purple"
  game2.shapeColor="white"
}
  drawSprites();
}
