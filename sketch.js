var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var test;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let drop1;
let drop2;
let drop3;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var bump = {
		restitution:0.5
	}
	let options = {
		isStatic:true
	}
	packageSprite=createSprite(width/2, 75, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
  
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,80);
	groundSprite.shapeColor=color(255)

  

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(helicopterSprite.x , 200 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody);
	
  test = Bodies.rectangle(width+10000000,500,30,30);
	World.add(world, test);
	drop1= Bodies.rectangle(width/2.6,565,20,130,options);
	World.add(world,drop1);
	drop2= Bodies.rectangle(width/2,620,160,30,options);
	World.add(world,drop1);
	drop3= Bodies.rectangle(width/1.7,565,20,130,options);
	World.add(world,drop3);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 1000, 80 , {isStatic:true} );
 	World.add(world, ground);
	 

	Engine.run(engine);
	console.log(packageBody);
}


function draw() {
  rectMode(CENTER);
  background("coral");
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  packageSprite.rotateToDirection =  true;
 // let angle = test.Body.angle;
  rectMode(CENTER);
  strokeWeight(1);
  fill("IndianRed");
  rect(drop1.position.x,drop1.position.y,20,130);
  rect(drop2.position.x,drop2.position.y,160,30);
  rect(drop3.position.x,drop3.position.y,20,130);


 // rotate(angle);
  fill("ghostwhite");
  rect(test.position.x,test.position.y,58,58);
  strokeWeight(1.5);
  // rotate(angle);
  fill("ghostwhite");
  stroke("DarkSlategray");
  ellipse(packageBody.position.x,packageBody.position.y,38,38);

  ellipseMode(CENTER);



  if(keyDown("k")){
    packageSprite.visible = false;

  }
  if(keyWentUp("k")){
    packageSprite.visible = true;

  }

  drawSprites();
 // packageBody.position.x = helicopterSprite.x ;
  groundSprite.shapeColor = color("crimson");
	if(keyDown("S")){
		Matter.Body.setStatic(packageBody,false);
		packageBody.position.x = packageSprite.x ;
	}
	if(keyDown("D")){
		helicopterSprite.velocityX = 10; 
		packageBody.position.x = packageSprite.x ;
		packageSprite.velocityX = packageBody.position.x;
	}
	if(keyWentUp("D")){
		helicopterSprite.velocityX = 0; 
		
	}
	if(keyDown("A")){
		helicopterSprite.velocityX = -10; 
		packageBody.position.x = packageSprite.x ;
	packageSprite.velocityX = packageBody.position.x;
	}
	if(keyWentUp("A")){
		helicopterSprite.velocityX = 0; 
		
	}
	if(keyDown("right")){
		Matter.Body.setVelocity(packageBody, {x: 6, y:0});
	}
	if(keyDown("left")){
		Matter.Body.setVelocity(packageBody, {x: -6, y:0});
	}
	if(keyDown("up")){
		Matter.Body.setVelocity(packageBody, {x: 0, y:-6});
	}
	
	if(keyDown("m")){
		Body.setAngularVelocity( test, Math.PI/3.5);
	}
	if(keyDown("n")){
		Body.setAngularVelocity( test, Math.PI/-3.5);
	}
	keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	
  }
}



