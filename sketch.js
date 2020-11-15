const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var box1, ground; 

function setup(){
  createCanvas(1200,500);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  box1 = new Box(100,300,50,50);
  box2 = new Box(130,100,50,100);
  ground= new Ground(600,490,1200,20);
 
}

function draw(){
background(0);
Engine.update(myEngine);

box1.display();
box2.display();
ground.display();
} 