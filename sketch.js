const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ourEngine,ourWorld;

var ground;



function preload(){
  
}
function setup() {
  createCanvas(1200,400);

  ourEngine = Engine.create();
  ourWorld= ourEngine.world;

  ground = new Ground(600,380,1200,20);
  
  }

function draw(){
  background("lightblue");

  Engine.update(ourEngine)

  

  ground.display();
}