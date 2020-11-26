
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var Score
var Ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;

Ground=createSprite(400,350,900,10);
Ground.velocityX=-4;
Ground.x=Ground.width/2;
Ground.scale=1;

FoodGroup=new Group ();
obstacleGroup=new Group();
  
Score=0;
}


function draw() {

background(225);
  
var SurvivalTime=0
stroke("white");
textSize(20);
fill("white");
text("Score: "+ Score, 500,50);

stroke("black");
textSize(20);
fill("black");
SurvivalTime=Math.ceil(frameCount/frameRate())
text("SurvivalTime:"+ SurvivalTime,100,50);
  
  
  
console.log(monkey.y)
  
if(Ground.x<0) 
{
Ground.x=Ground.width/2;  
}


if(keyDown("space")&& monkey.y >= 314.3 )
{
monkey.velocityY=-12;
}
  
if(FoodGroup.isTouching(monkey))
{
FoodGroup.destroyEach();
Score=Score+2;
}

if(obstacleGroup.isTouching(monkey))
{
obstacle.visible=false;
monkey.visible=false;
Score=0;
}


monkey.velocityY = monkey.velocityY + 0.8;

monkey.collide(Ground);
Food ();
obstacle ();
drawSprites();


  
}

function Food ()
{
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,240,40,10);
    //banana.y = Math.round(random(330));
    banana.addImage(bananaImage);
    banana.velocityX=-7;
    banana.scale=0.1;
    FoodGroup.add(banana);
  }
}

function obstacle ()
{
if(frameCount % 60 === 0 )
{
var obstacle= createSprite(600,325,40,10);
obstacle.addImage(obstacleImage);
obstacle.velocityX=-7;
obstacle.scale=0.1;
obstacleGroup.add(obstacle);
}
} 


