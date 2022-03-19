const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body
var engine, world,ground;

var bg;
var tower;
var towerimg;

var angle
var cannon

var balls = [];

function preload() {
  bg = loadImage("assets/background.gif");
  towerimg = loadImage("assets/tower.png");
  
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

 var options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower = Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);

 cannon = new Cannon(180,110,130,100,angle);
 
}

function draw() {
  background(189);

  

  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 image(bg,0,0,1200,600);

 push();
 imageMode(CENTER);
 image(towerimg,tower.position.x,tower.position.y,160,310);
 pop();  

 cannon.display();
 for(var i = 0;i<balls.length;i ++){
   showcannonballs(balls[i],i);
 }


}


function keyPressed(){
if(keyCode===32){
  var cannonball = new Cannonball(cannon.x, cannon.y);
  balls.push(cannonball)
}

}

function keyReleased(){
  if(keyCode===32){
    balls[balls.length-1].shoot();
  }
}

function showcannonballs(ball,i){

if(ball){
  ball.display();

}
}