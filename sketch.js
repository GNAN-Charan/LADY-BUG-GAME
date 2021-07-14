var bgimg,background1,base,box1,box2,box3,box4,box5,box6,box7,box8,box9
var runner,runnerimg
var catcher,catcherimg,winnerimg
var gameState = "play"

function preload()
{
  
  bgimg = loadImage("gamingbackground2.png")
  runnerimg = loadImage("lady bug punch.png")
  catcherimg = loadImage("hawkMoth.webp")
  winnerimg = loadImage("ladybug-removebg-preview.png")
}

function setup() 
{
  createCanvas(800, 600);
  
  background1 = createSprite(300,300);
  background1.addImage("ocean",bgimg);
  background1.x = background1.width/2;
  
  box1 = createSprite(300,515,60,60)
  box1.shapeColor = "blue"
  
  box2 = createSprite(370,515,60,60)
  box2.shapeColor = "red"

  box3 = createSprite(440,515,60,60)
  box3.shapeColor = "blue"

  box4 = createSprite(300,450,60,60)
  box4.shapeColor = "red"
  
  box5 = createSprite(300,385,60,60)
  box5.shapeColor = "blue"
  
  box6 = createSprite(370,450,60,60)
  box6.shapeColor = "blue"
  
  box7 = createSprite(370,385,60,60)
  box7.shapeColor = "red"
  
  box8 = createSprite(440,385,60,60)
  box8.shapeColor = "blue"
  
  box9 = createSprite(440,450,60,60)
  box9.shapeColor = "red"
    
  runner = createSprite(100,460,10,10)
  runner.addImage("boat",runnerimg)
  runner.scale = 0.5
  
  catcher = createSprite(700,450,10,10)
  catcher.addImage("police",catcherimg)
  catcher.scale = 0.10
  
  base = createSprite(400,550,800,10)
  
  
}

function draw() 
{
  background(0);
  if(gameState === "play") 
  {
    if(background1 .x < 300){
      background1.x = 600
    }

   if(keyDown("Right_Arrow"))
   {
     runner.x = runner.x + 5;
    }
    if(keyDown("LEFT_ARROW"))
   {
      runner.x = runner.x - 5;
    }
  }
  if(runner.isTouching(box1))
  {
    box1.lifetime = 0
  }
  if(runner.isTouching(box2))
  {
    box2.lifetime = 0
  }
  if(runner.isTouching(box3))
  {
    box3.lifetime = 0
  }
  if(runner.isTouching(box4))
  {
    box4.lifetime = 0
  }
  if(runner.isTouching(box5))
  {
    box5.lifetime = 0
  }
  if(runner.isTouching(box6))
  {
    box6.lifetime = 0
  }
  if(runner.isTouching(box7))
  {
    box7.lifetime = 0
  }
  if(runner.isTouching(box8))
  {
    box8.lifetime = 0
  }
  if(runner.isTouching(box9))
  {
    box9.lifetime = 0
  }
  if(runner.isTouching(catcher))
  {
    gameState = "end"
    box1.lifetime = 0
  }
  drawSprites();
  
    if (gameState === "end")
    {
      winner = createSprite(700,460,10,10)
      winner.addImage("boat",winnerimg)
      winner.scale = 0.3
      catcher.lifetime = 0
      runner.lifetime = 0
      stroke("yellow");
      fill("yellow");
      textSize(30);
      text("Lady Bug Always Wins", 245,250)
    }
  
}
