const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow
var world, engine
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  bgImg = loadImage("snow3.jpg")
  snow1 = new Snow(200,200,50,50)
  snow2 = new Snow(300,200,50,50)
  snow3 = new Snow(400,200,50,50)
  snow4 = new Snow(500,200,50,50)
  snow5 = new Snow(600,200,50,50)
}

function draw() {
  background(255,255,255);  
  background(bgImg)
  Engine.update(engine);
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  drawSprites();
  
}