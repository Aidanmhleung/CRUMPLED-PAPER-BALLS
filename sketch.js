const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var gate1, gate2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 ground = new Ground(200,710,2000,40);
	 right = new Ground(790,700,20,2000 );
	 left = new Ground(10,700,20,2000);
	 top_wall = new Ground(800,100 ,2000,20);

	 var ball_options = {
		isStatic:false,
		resitution:0.03,
		friction:0,
		density:1
	  }

	ball = Bodies.circle(100,100,20,ball_options);
	World.add(world,ball);
	fill("white");
	rectMode(CENTER);
	ellipseMode(RADIUS);

	 var gate1_options = {
		isStatic:true
	  };
	  gate1 = Bodies.rectangle(700,650,20,200, gate1_options);
	  World.add(world, gate1);
	   fill("yellow  ");

	  var gate2_options = {
		isStatic:true
	  };
	  gate2 = Bodies.rectangle(500,650,20,200, gate2_options);
	  World.add(world, gate2);
 
	
	 	Engine.run(engine);
	
}

function draw() {
  background("green");
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  rect(gate1.position.x, gate1.position.y, 20,200)
  rect(gate2.position.x, gate2.position.y, 20,200)
  ellipse(ball.position.x , ball.position.y , 20);

  if(keyDown("space")){
hForce();
vForce();
  }
Engine.update(engine);
  drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0 , y:0},{x:5 , y:0});
	}
	
	function vForce(){
	  Matter.Body.applyForce(ball,{x:0 , y:0},{x:0, y:-10});
	}

