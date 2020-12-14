
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score=0;
var ground;

var background1,backgroundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 backgroundImage=loadImage("jungle.jpg");
}



function setup() {
  createCanvas(400,400);
  background1=createSprite(400,400,10,10);
  background1.addImage(backgroundImage);
  background1.velocityX=-4;
  background.scale=0.1
monkey=createSprite(80,350,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,400,450,10);
  ground.velocityX=-4
  ground.scale=1.5;
  console.log(ground.x);
  ground.visible=false
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background("white");
  monkey.collide(ground);
  if(keyDown("space")&& monkey.y >= 250){
    monkey.velocityY=-15;
  }
  if (ground.x < 0){
    
    ground.x = ground.width/2;
    
  }
  if (background1.x < 0){
    
   background1.x = background1.width/2;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
  spawnBananas();
  spawnObstacles();
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+2;
  }
  switch(score){
    case 10:monkey.scale=0.12;
      break;
      case 20:monkey.scale=0.14;
      break;
      case 30:monkey.scale=0.16;
      break;
      case 40:monkey.scale=0.18;
      break;
      default:
      break;
  }
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.1;
  }
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score"+score,300,50);
}
function spawnBananas(){
if(frameCount%80===0){
  banana=createSprite(600,random(120,200),10,10);
  banana.addImage(bananaImage);
  banana.velocityX=-3;
  banana.scale=0.1;
  banana.lifeTime=10;
  bananaGroup.add(banana);
  
}
}
function spawnObstacles(){
  if(frameCount%150===0){
    obstacle=createSprite(600,380,100,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1;
    obstacle.lifeTime=150;
    obstacleGroup.add(obstacle);
  }
}




