var gamestate=0;
var startbg,bg;
var Mario, marioimg, runningmarioimg;
var ground;



function preload(){
startbg = loadImage("Images/welcome.png");
bg =loadImage("Images/background.png");
marioimg = loadAnimation("Images/frame_0.png");
runningmarioimg = loadAnimation("Images/frame_0.png","Images/frame_1.png","Images/frame_2.png");

}

function setup(){
    createCanvas(windowWidth-20, windowHeight-25);
    Mario = createSprite(65,500,20,20);
    Mario.visible = false;
    ground = createSprite(width*2.5,height-60,width*5,20);
    ground.visible = false;
    Mario.addAnimation("Mario",marioimg);
    Mario.addAnimation("running mario",runningmarioimg);

    
}
function draw(){
    if(gamestate === 0){
        imageMode(CENTER);
        background("Black");
      image(startbg, width/2, height/2-100, 500, 300);
      fill("White");
      textSize(40);
      textFont("Algebrian");
      text("To Start the Game ", width/2-150, (3/4)*height);
      text("Press (Space Key) ", width/2-150, (3/4)*height+50);


      if(keyDown("space")){
          gamestate = 1;
      }
    }

    if(gamestate == 1){
     background("Red");
     imageMode(CENTER);
     image(bg, width*2, height/2, width*6, height);
     
    
     Mario.scale = 0.2;
     Mario.visible = true;
     
     camera.position.x = Mario.x;
     camera.position.y = height/2;

    

     if(keyDown("UP_ARROW")||keyDown("W")&& Mario.y>height-100){
         Mario.velocityY = -15;
     }
     Mario.velocityY = Mario.velocityY+0.5;
     Mario.collide(ground);
    
    if(keyWentDown("RIGHT_ARROW")||keyWentDown("D")){
        Mario.velocityX = 2;
        Mario.changeAnimation("running mario",runningmarioimg);
    }
    if(keyWentUp("RIGHT_ARROW")||keyWentUp("D")){
        Mario.velocityX = 0;
        Mario.changeAnimation("Mario",marioimg);

    }    console.log(Mario.x);
    

    drawSprites();
}
}