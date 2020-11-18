const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var box1, ground, pig1,log1;
var box3, box4,pig2, log2;
var box5, log3, log4,bird1;


function setup(){
  createCanvas(1200,500);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  ground= new Ground(600,490,1200,20);

  box1 = new Box(800,400);
  box2 = new Box(1000,400);
  pig1= new Pig(900,400);
  log1= new Log(900,360,300,PI/2);

  box3= new Box(800,300);
  box4= new Box(1000,300);
  pig2= new Pig(900,300);
  log2= new Log(900,260,300,PI/2);

  box5= new Box(900,200);
  log3= new Log(830,120,150,PI/7);
  log4= new Log(1000,120,150,-PI/7);

  bird1= new Bird(500,200);
}

function draw(){
background(0);
Engine.update(myEngine);

box1.display();
box2.display();
ground.display();
pig1.display();

log1.display();
box3.display();
box4.display();
pig2.display();

log2.display();
box5.display();
log3.display();
log4.display();

bird1.display();
} 