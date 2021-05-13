
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject
	
var world;


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,650,70);
	groundObject=new ground(width/2,670,width,20);
	Launcher= new Launcher(paperObject.body,{x:200,y:400});
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObject.display();
  Launcher.display();
  groundObject.display();
  dustbinObj.display();
}

function mouseDragged(){

    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    Launcher.fly();
}

