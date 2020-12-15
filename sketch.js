var player
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score;

var bananaGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  var survivalTime=0;
  canvas=(600,600);
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
 score = 0;
  
  
}


function draw() {
 //monkey.debug = true;
      background(255);
      

        if(ground.x<0);{
        ground.x=ground.width/2;
      }

          if(keyDown("space")) {
          monkey.velocityY = -12;
        }
        monkey.velocityY=monkey.velocityY+0.8;

          monkey.collide(ground);
          spawnFood();
          spawnObstacles();
         

drawSprites();
      stroke("White");
      textSize(20);
      fill("white");
      text("Score:"+ score,500,50);
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
  obtaclesGroup.setlifetimeEach(-1);
    FoodGroup.setlifetimeEach(-1);
}
     stroke("black");
    textSize(20);
    fill("black");
    survivalTime = Math.ceil(frameCount/frameRate())
    text("SurvivalTime: "+ survivalTime,100,50);
}



  function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX=-6;
    obstacle.addImage(obstacleImage);       
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
function spawnFood() {
   if (frameCount % 80 === 0) {
     banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200));
       banana.velocityX = -2;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 200;
      monkey.depth=banana.depth+1;
    FoodGroup.add(banana);
  }
  
}













