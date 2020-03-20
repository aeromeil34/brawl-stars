var tut1, tut2;
var bot1, bot2, bot3, bot4;
var gem1, gem2, gem3, gem4, gem5, gem6, gem7, gem8, gem9, gem10;
var pirate, bear, gunman,guitarman, wrestler;
var barrel, ricochet, zombie, bee, mummy, speedy;
var crow, cactus;
var count = 0;
var gameState = "start";
var bullet1, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7, bullet8, bullet9, bullet10;
var autoFire, lifebar, lifebar1,lifebar2,lifebar3,lifebar4, lifebar5; 
var life = 4000, life1 = 700, life2 = 700, life3 = 700, life4 = 700, life5 = 30000;
var flag = 0;

/*function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}*/

function setup(){
  canvas = createCanvas(800,800);
  tut1 = createSprite(400,790,30,30);
  tut1.shapeColor ="orange";

  tut2 = createSprite(400, 700, 100, 100);

  lifebar = createSprite(200,200, 60, 15);
  lifebar.shapeColor = "red";

  lifebar1 = createSprite(200,200, 60, 15);
  lifebar1.shapeColor = "red";

  lifebar2 = createSprite(200,200, 60, 15);
  lifebar2.shapeColor = "red";

  lifebar3 = createSprite(200,200, 60, 15);
  lifebar3.shapeColor = "red";

  lifebar4 = createSprite(200,200, 60, 15);
  lifebar4.shapeColor = "red";

  lifebar5 = createSprite(200,200, 100, 15);
  lifebar5.shapeColor = "red";

  autoFire = createSprite(760,700,20,20);
  autoFire.shapeColor = "red";
  autoFire.visible = false;

  gem1 = createSprite(random(0,800),random(0,800),20,20);
  gem1.shapeColor = "pink";
  gem1.visible = false;

  gem2 = createSprite(random(0,800),random(0,800),20,20);
  gem2.shapeColor = "pink";
  gem2.visible = false;

  gem3 = createSprite(random(0,800),random(0,800),20,20);
  gem3.shapeColor = "pink";
  gem3.visible = false;

  gem4 = createSprite(random(0,800),random(0,800),20,20);
  gem4.shapeColor = "pink";
  gem4.visible = false;

  gem5 = createSprite(random(0,800),random(0,800),20,20);
  gem5.shapeColor = "pink";
  gem5.visible = false;

  gem6 = createSprite(random(0,800),random(0,800),20,20);
  gem6.shapeColor = "pink";
  gem6.visible = false;

  gem7 = createSprite(random(0,800),random(0,800),20,20);
  gem7.shapeColor = "pink";
  gem7.visible = false;

  gem8 = createSprite(random(0,800),random(0,800),20,20);
  gem8.shapeColor = "pink";
  gem8.visible = false;

  gem9 = createSprite(random(0,800),random(0,800),20,20);
  gem9.shapeColor = "pink";
  gem9.visible = false;

  gem10 = createSprite(random(0,800),random(0,800),20,20);
  gem10.shapeColor = "pink";
  gem10.visible = false;

  
  bot1 = createSprite(100,100,30,30);
  bot1.shapeColor = "blue";

  bot2 = createSprite(300,100,30,30);
  bot2.shapeColor = "blue";

  bot3 = createSprite(500,100,30,30);
  bot3.shapeColor = "blue";

  bot4 = createSprite(700,100,30,30);
  bot4.shapeColor = "blue";

  bear = createSprite(400,400,30,30);
  bear.shapeColor = "brown";

  gunman = createSprite(400,300,30,30);
  gunman.shapeColor = "red";

  guitarman = createSprite(400,200,30,30);
  guitarman.shapeColor = "green";

  wrestler = createSprite(400,100,30,30);
  wrestler.shapeColor = "purple";

  barrel = createSprite(400,500,30,30);
  barrel.shapeColor = "black";

  ricochet = createSprite(400,600,30,30);
  ricochet.shapeColor = "yellow";

  zombie = createSprite(400,700,30,30);
  zombie.shapeColor = "white";

  bee = createSprite(500,300,30,30);
  bee.shapeColor = rgb(255,105,180);

  mummy = createSprite(500,400,30,30);
  mummy.shapeColor = rgb(255,182,193);

  speedy = createSprite(500,500,30,30);
  speedy.shapeColor = rgb(212,175,55);

  crow = createSprite(500,600,30,30);
  crow.shapeColor = rgb(192,192,192);

  cactus = createSprite(500,200,30,30);
  cactus.shapeColor = rgb(0,100,0);

  bot1.visible = false;
  bot2.visible = false;
  bot3.visible = false;
  bot4.visible = false;
  bear.visible = false;
  gunman.visible = false;
  crow.visible = false;
  speedy.visible = false;
  bee.visible = false;
  zombie.visible = false;
  cactus.visible = false;
  mummy.visible = false;
  guitarman.visible = false;
  barrel.visible = false;
  ricochet.visible = false;
  wrestler.visible = false;
  tut2.visible = false;
  lifebar1.visible = false;
  lifebar2.visible = false;
  lifebar3.visible = false;
  lifebar4.visible = false;
  lifebar5.visible = false;

}


function draw(){
background("white");

drawSprites();

if(keyWentDown(UP_ARROW)){
  tut1.velocityY = -2;
} 
if(keyWentUp(UP_ARROW)){
  tut1.velocityY = 0;
}
if(keyWentDown(DOWN_ARROW)){
  tut1.velocityY = 2;
} 
if(keyWentUp(DOWN_ARROW)){
  tut1.velocityY = 0;
}
if(keyWentDown(LEFT_ARROW)){
  tut1.velocityX = -2;
} 
if(keyWentUp(LEFT_ARROW)){
  tut1.velocityX = 0;
}
if(keyWentDown(RIGHT_ARROW)){
  tut1.velocityX = 2;
}
if(keyWentUp(RIGHT_ARROW)){
  tut1.velocityX = 0;
}
lifebar.x = tut1.x;
lifebar.y = tut1.y - 25;

lifebar1.x = bot1.x;
lifebar1.y = bot1.y - 25;

lifebar2.x = bot2.x;
lifebar2.y = bot2.y - 25;

lifebar3.x = bot3.x;
lifebar3.y = bot3.y - 25;

lifebar4.x = bot4.x;
lifebar4.y = bot4.y - 25;

lifebar5.x = tut2.x;
lifebar5.y = tut2.y - 25;

if(gameState === "start"){
    textSize(28);
    text("press space to start",280,400);
    textSize(18);
    text("I am going to teach you how to play this game.",430,750);
    textSize(20);
    text("hi! I am Shelly.",550,700);
    }
    if(keyDown("space") && (gameState === "start")){
      gameState = "gem";
    }
  if(gameState === "gem"){
    textSize(20);
    text("press the arrow keys",550,700); 
    text("or",610,725);
    text("drag the blue joystick to move",480,750);

    if(life1 <=0){
      bot1.destroy();
      flag += 1;
    }
    if(life2 <=0){
      bot2.destroy();
      flag += 1;
    }
    if(life3 <=0){
      bot3.destroy();
      flag += 1;
    }
    if(life4 <=0){
      bot4.destroy();
      flag += 1;
    }
    
    gem1.visible = true;
    gem2.visible = true;
    gem3.visible = true;
    gem4.visible = true;
    gem5.visible = true;
    gem6.visible = true;
    gem7.visible = true;
    gem8.visible = true;
    gem9.visible = true;
    gem10.visible = true;

  if(tut1.isTouching(gem1)){
    gem1.destroy();
    count+=1;
  }
  if(tut1.isTouching(gem2)){
    gem2.destroy();
    count+=1;
  }
  if(tut1.isTouching(gem3)){
    gem3.destroy();
    count+=1;
  }
  if(tut1.isTouching(gem4)){
    gem4.destroy();
    count+=1;
  }
  if(tut1.isTouching(gem5)){
    gem5.destroy();
    count+=1;
  }
  if(tut1.isTouching(gem6)){
    gem6.destroy();
    count+=1;
  }
  if(tut1.isTouching(gem7)){
    gem7.destroy();
    count+=1;
  }
  if(tut1.isTouching(gem8)){
    gem8.destroy();
    count+=1;
  }
  if(tut1.isTouching(gem9)){
    gem9.destroy();
    count+=1;
  }
  if(tut1.isTouching(gem10)){
    gem10.destroy();
    count+=1;
  }
  if(count === 1){
    gameState = "bot";
  }
  if(gameState === "bot"){
    textSize(18);
    text("drag the red joystick to fire",500,700); 
    
    bot1.visible = true;
    bot2.visible = true;
    bot3.visible = true;
    bot4.visible = true;
    lifebar1.visible = true;
    lifebar2.visible = true;
    lifebar3.visible = true;
    lifebar4.visible = true;
    autoFire.visible = true;
  
  if(lifebar1.visible === true){
    text(life1,lifebar1.x -5,lifebar1.y + 5);
  }
  if(lifebar2.visible === true){
    text(life2,lifebar2.x -5,lifebar1.y + 5);
  }
  if(lifebar3.visible === true){
    text(life3,lifebar3.x -5,lifebar1.y + 5);
  }
  if(lifebar4.visible === true){
    text(life4,lifebar4.x -5,lifebar1.y + 5);
  }
  if(lifebar5.visible === true){
    text(life5,lifebar5.x -5,lifebar1.y + 5);
  }
 mouse();
}
  }
  textSize(14);
  text(life,lifebar.x - 5,lifebar.y + 5);
  if(flag === 4){
    gameState = "boss";
  }
  if(gameState === "boss"){
    tut2.visible = true;
    lifebar5.visible = true;
    life5.visible = true;
  }
}
function mouse(){
if(mousePressedOver(autoFire)){
  spawnBullets();
}
}
function spawnBullets(){
  
  bullet1 = createSprite(400,790,2,2);
  bullet1.visible = false;
  bullet1.shapeColor = "black";

  bullet2 = createSprite(400,790,2,2);
  bullet2.visible = false;
  bullet2.shapeColor = "black";

  bullet3 = createSprite(400,790,2,2);
  bullet3.visible = false;
  bullet3.shapeColor = "black";

  bullet4 = createSprite(400,790,2,2);
  bullet4.visible = false;
  bullet4.shapeColor = "black";

  bullet5 = createSprite(400,790,2,2);
  bullet5.visible = false;
  bullet5.shapeColor = "black";

  bullet6 = createSprite(400,790,2,2);
  bullet6.visible = false;
  bullet6.shapeColor = "black";

  bullet7 = createSprite(400,790,2,2);
  bullet7.visible = false;
  bullet7.shapeColor = "black";

  bullet8 = createSprite(400,790,2,2);
  bullet8.visible = false;
  bullet8.shapeColor = "black";

  bullet9 = createSprite(400,790,2,2);
  bullet9.visible = false;
  bullet9.shapeColor = "black";

  bullet10 = createSprite(400,790,2,2);
  bullet10.visible = false;
  bullet10.shapeColor = "black";

  bullet1.velocityY = -4;
  bullet1.velocityX = 4;
  bullet1.y = tut1.y;
  bullet1.x = tut1.x;

  bullet2.velocityY = -4;
  bullet2.velocityX = 3;
  bullet2.y = tut1.y;
  bullet2.x = tut1.x;

  bullet3.velocityY = -4;
  bullet3.velocityX = 2;
  bullet3.y = tut1.y;
  bullet3.x = tut1.x;

  bullet4.velocityY = -4;
  bullet4.velocityX = 1;
  bullet4.y = tut1.y;
  bullet4.x = tut1.x;

  bullet5.velocityY = -4;
  bullet5.y = tut1.y;
  bullet5.x = tut1.x;

  bullet6.velocityY = -4;
  bullet6.y = tut1.y;
  bullet6.x = tut1.x;

  bullet7.velocityY = -4;
  bullet7.velocityX = -1;
  bullet7.y = tut1.y;
  bullet7.x = tut1.x;

  bullet8.velocityY = -4;
  bullet8.velocityX = -2;
  bullet8.y = tut1.y;
  bullet8.x = tut1.x;

  bullet9.velocityY = -4;
  bullet9.velocityX = -3;
  bullet9.y = tut1.y;
  bullet9.x = tut1.x;

  bullet10.velocityY = -4;
  bullet10.velocityX = -4;
  bullet10.y = tut1.y;
  bullet10.x = tut1.x;

  if(bullet1.isTouching(bot1)){
    life1 = life1 - 300;
  }
  if(bullet2.collide(bot1)){
    life = life1 - 300;
  }
  if(bullet3.collide(bot1)){
    life1 = life1 - 300;
  }
  if(bullet4.collide(bot1)){
    life1 = life1 - 300;
  }
  if(bullet5.collide(bot1)){
    life1 = life1 - 300;
  }
  if(bullet6.collide(bot1)){
    life1 = life1 - 300;
  }
  if(bullet7.collide(bot1)){
    life1 = life1 - 300;
  }
  if(bullet8.collide(bot1)){
    life1 = life1 - 300;
  }
  if(bullet9.collide(bot1)){
    life1 = life1 - 300;
  }
  if(bullet10.collide(bot1)){
    life1 = life1 - 300;
  }
  if(bullet1.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet2.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet3.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet4.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet5.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet6.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet7.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet8.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet9.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet10.collide(bot2)){
    life2 = life2 - 300;
  }
  if(bullet1.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet2.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet3.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet4.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet5.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet6.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet7.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet8.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet9.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet10.collide(bot3)){
    life3 = life3 - 300;
  }
  if(bullet1.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet2.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet3.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet4.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet5.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet6.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet7.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet8.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet9.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet10.collide(bot4)){
    life4 = life4 - 300;
  }
  if(bullet1.isTouching(tut2)){
    life5 = life5 - 300;
  }
}
