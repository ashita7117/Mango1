
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(550, 500);


	engine = Engine.create();
	world = engine.world;

	boy1 = new Boy(200,400);
    tree = new Tree(400,400)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boy1.show();
  tree.show();
  
  drawSprites();
 
}



