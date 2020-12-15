
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ground;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin = new Dustbin(1210,760);
  
  
  ground = new Ground(700,770,1400,10);

  paper1 = new Paper(200,700,70);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  dustbin.display();
 

  ground.display();

  paper1.display();

  
  drawSprites();
 
}

function keyPressed() {

  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});
  
  }
}




