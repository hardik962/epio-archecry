const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerbase=new computerbase(300,random(450,height),180,150)
    player2=new player1(285, playerbase.body.position.y-153,50,180)

    computer1base=new computerbase(1200,random(450,height),180,150)
    computer2=new player1(1200,computer1base.body.position.y-153,50,180)
 }

function draw() {

  background(180);

  Engine.update(engine);


  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
playerbase.display()
player2.display()

computer1base.display();
computer2.display();
   //display Player and computerplayer


}
