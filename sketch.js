var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG,packageBody;
var ground,ground_option;
var fondo;
var caja, cimg,cBody;
var jeep,jimg,jeepBody;
var niña,niñaimg,niñaBody,n2,n3;
var tram,timg,tBody;
var fondo2,fimg;
var boom,boomBody,bimg;
var texto,t1,t2,t3,t4,t5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicoptero.png");
	packageIMG=loadImage("caja.png");
	cimg=loadImage("caja2.png");
	fondo=loadImage("fondo.jpg");
	jimg=loadImage("jeep.png");
	niñaimg=loadImage("niña2.png");
	n2=loadImage("jeep2.png");
	fimg=loadImage("explosion2.gif");
	bimg=loadImage("bomba.png");
	t1=loadImage("texto1.png");
	n3=loadImage("niña4.png");
	t2=loadImage("texto2.png");
	t3=loadImage("texto3.png");
	t4=loadImage("texto4.png");
	t5=loadImage("texto5.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	texto=createSprite(150,100);
	texto.addImage(t1);
    texto.scale=0.42;

	packageSprite=createSprite(300, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.3;

	boom=createSprite(350,180);
	boom.addImage(bimg);
	boom.scale=0.3;

	helicopterSprite=createSprite(width/2, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.55;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.visible=false;


    jeep=createSprite(1000,570);
	jeep.addImage(jimg);
	jeep.scale=0.8;
	jeep.setCollider("rectangle",0,0,450,200);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(350 , 170 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	boomBody = Bodies.circle(350 , 170 , 5 , {isStatic:true});
	World.add(world, boomBody);
	
	
    cBody= Bodies.rectangle(400,570,200,20,{isStatic:true});
	World.add(world,cBody);
	
    var ground_option={
		isStatic:true
	  }

	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_option );
 	World.add(world, ground);

 	boxPosition=width/2-100;
 	boxY=610;

 	boxleftSprite=createSprite(boxPosition, boxY, 5,100);
 	boxleftSprite.shapeColor=color(255,0,0);
	boxleftSprite.visible=false;

 	boxLeftBody = Bodies.rectangle(boxPosition+10, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,5);
 	boxBase.shapeColor=color(255,0,0);
	boxBase.visible=false;

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 5,100);
 	boxleftSprite.shapeColor=color("red");
	boxleftSprite.visible=false;

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
	boxRightBody.visible=false;

	jeepBody= Bodies.rectangle(1000,570,300,200,{isStatic:true});
	World.add(world,jeepBody);

	niñaBody= Bodies.rectangle(270,280,20,20,{restitution:0.5,isStatic:true});
	World.add(world,niñaBody);
	
	caja=createSprite(400,570);
	caja.addImage(cimg);
	caja.scale=0.35;
	
	fondo2=createSprite(300,350);
	fondo2.addImage(fimg);
	fondo2.scale=2.5;
	fondo2.visible=false;
   
	niña=createSprite(250,250,20,20);
	niña.addImage(niñaimg);
	niña.scale=0.2;
	niña.visible=false;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(fondo);

  texto.depth=fondo2.depth;
  texto.depth=texto.depth+1;

  helicopterSprite.depth=helicopterSprite.depth+1;
  helicopterSprite.depth=texto.depth;

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 

  boom.x= boomBody.position.x;
  boom.y= boomBody.position.y; 

  jeep.x= jeepBody.position.x;
  jeep.y= jeepBody.position.y;
  
  niña.y = niñaBody.position.y;
  niña.x = niñaBody.position.x;

  caja.x= cBody.position.x;
  caja.y= cBody.position.y;

  if(keyDown("LEFT_ARROW")){
	helicopterSprite.x=helicopterSprite.x-20;
	Matter.Body.translate(packageBody,{x:-20,y:0});
	Matter.Body.translate(niñaBody,{x:-20,y:0})
	Matter.Body.translate(boomBody,{x:-20,y:0})
  }

  if(keyDown("RIGHT_ARROW")){
	helicopterSprite.x=helicopterSprite.x+20;
	Matter.Body.translate(packageBody,{x:+20,y:0});
	Matter.Body.translate(niñaBody,{x:+20,y:0})
	Matter.Body.translate(boomBody,{x:+20,y:0})
  }


  if(keyCode===DOWN_ARROW){
	  Matter.Body.setStatic(packageBody,false);
	  niña.visible=true;
	  texto.addImage("texto",t2);
	  texto.changeImage("texto");
	  texto.scale=0.5;
  }

  if(keyDown("m")){
	Matter.Body.setStatic(boomBody,false);
	niña.visible=false;
	jeep.visible=false;
	helicopterSprite.visible=false;

	texto.addImage("texto",t5);
	texto.changeImage("texto");
	texto.scale=0.5;
	texto.x=130;
	texto.y=70;
  }

  if(keyDown("k")){
	jeep.x=jeep.x-20;
	Matter.Body.translate(jeepBody,{x:-20,y:0});
  }

  if(keyDown("l")){
	jeep.x=jeep.x+20;
    Matter.Body.translate(jeepBody,{x:+20,y:0});
  }

  if(keyDown("b")){
	Matter.Body.setStatic(niñaBody,false);
  }

  if(jeep.isTouching(caja)){
	Matter.Body.translate(cBody,{x:-20,y:0});
  }

  if(niña.isTouching(jeep)){
   jeep.addImage("niña",n2);
   jeep.changeImage("niña");
   jeep.scale=0.5;

    niña.destroy();

   texto.addImage("texto",t3);
   texto.changeImage("texto");
   texto.scale=0.5;
   texto.x=180;
   texto.y=70;
  }
 
  if(boom.y>400){
	fondo2.visible=true;
	boom.visible=false;
  }

  if(niña.isTouching(groundSprite)){
	niña.addImage("niña",n3);
	niña.changeImage("niña");
	niña.scale=0.2;

	texto.addImage("texto",t4);
    texto.changeImage("texto");
    texto.scale=0.5;
	texto.y=100;
	texto.x=150;
  }

  drawSprites();
  
  
 
}
