
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperImg, dustbinImg;


function preload(){

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	leftSide = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	rightSide = new Dustbin(670,620,20,100);

	paper = new Paper(300,450,20, 30);

	ground = new Ground(400,680,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  //Engine.update(engine);

  
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  paper.display();

  


 
}

function keyPressed() {
if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x:30, y: -70});

}
}



