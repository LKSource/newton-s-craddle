
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof=new Ground(400,350,500,40)
   bob1 = new Bob(400,height-100,100)
   rope1=new Rope(bob1.body,roof.body,0,0)
   bob2=new Bob(300,height-100,100)
   rope2=new Rope(bob2.body,roof.body,-100,0)
   bob3=new Bob(200,height-100,100)
   rope3=new Rope(bob3.body,roof.body,-200,0)
   bob4=new Bob(500,height-100,100)
   rope4=new Rope(bob4.body,roof.body,100,0)
   bob5=new Bob(600,height-100,100)
   rope5=new Rope(bob5.body,roof.body,200,0)
   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
}


