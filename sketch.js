
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//var bal1,ball2 
var wall,wall2,wall3
var ground
var ball1,ball2


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 ground = new Ground(400,670,800,10);
wall = new Dustbin(600,600,10,70);
wall2 = new Dustbin(520,600,10,70);
wall3 = new Dustbin(555,600,80,10);
ball1 = new Paper(555,600,80,10);
ball2 = new Paper(555,600,80,10);
 

engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	
	Engine.run(engine);
  
}


function draw() {

  background(0);
ground.display();
wall.display();
wall2.display();
wall3.display();
ball1.display();
	ball2.display();
  drawSprites();
 
}



