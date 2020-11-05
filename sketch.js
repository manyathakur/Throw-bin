
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// bahut maehnaat lagi is project me bodies banane me bahut error aa rahe thae mujhe us lecture ka revision karna padhega lekin maine project kar liya OOF :)

var GG,copy,wall,wale,waf,walll,M;
var engine,world,cop;

function preload(){
   M = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;
 
    copy = new Paper(160,360);

	GG = new Ground();

	waf = new Bin(600,345,60,10);
	wale = new Bin(565,310,10,80);
	wall = new Bin(635,310,10,80);
	walll = createSprite(600,310,10,10);
	walll.addImage("red",M);
	walll.scale = 0.235;

	Engine.run(engine);
}


function draw() {
  background(255);
  
  copy.display();

  GG.earth();

  waf.hiro();
  wale.hiro();
  wall.hiro();
  
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(copy.pap,copy.pap.position,{x:45,y:-70});
	}
}
