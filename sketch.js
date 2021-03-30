var hammer
var rock
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	rock=createSprite(300,700,100,100)
	hammer=createSprite(500,370,200,50)
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
 
  
}


function draw() {
  rectMode(CENTER);
hammer.shapeColor="blue"
  background(0);


  if (keyDown(LEFT_ARROW)){
	  hammer.x=hammer.x-10
  }
 if (keyDown(RIGHT_ARROW)){
	 hammer.x=hammer.x+10
 }

 if(keyDown(DOWN_ARROW)){
	 hammer.y=hammer.y+10
 }
 if (keyDown(UP_ARROW)){
	 hammer.y=hammer.y-10
 }
 if (rock.isTouching(hammer)){
	 rock.shapeColor="black"
 }
  drawSprites();
 
}



