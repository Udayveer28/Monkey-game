
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 
}



function setup() {                
  createCanvas(600,600)
  
monkey= createSprite(50,530,20,20)
   monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1; 
  ground=createSprite(300,570,600,10);
  ground.velocityX=-6
  obstacleGroup=new Group();
}

function draw() {
  background("lightblue")
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  spawnObstacles();
  drawSprites()
  
}
function spawnObstacles(){
  if(frameCount%150===0){
    obstacle=createSprite(300,550,10,20)
    obstacle.addImage("obstacle",obstacleImg);
   obstacle.velocityX=-6;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
    obstacle.scale=0.1;
}
}




