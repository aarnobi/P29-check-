const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var hexagonImg,slingshot;

function preload(){
    hexagonImg = loadImage("polygon.png");
}

function setup(){
    engine = Engine.create()
    World = engine.world;

    createCanvas(800,1200);
    
    block1=new Block (270,500,30,40);
    block2=new Block (300,500,30,40);
    block3=new Block (330,500,30,40);
    block4=new Block (360,500,30,40);
    block5=new Block (390,500,30,40);
    block6=new Block (410,500,30,40);
    block7=new Block (440,500,30,40);
    //stand2 2nd layer
    block8=new Block (300,540,30,40);
    block9=new Block (330,540,30,40);
    block10=new Block (360,540,30.40);
    block11=new Block (390,540,30,40);
    block12=new Block (410,540,30,40);
    //stand2 3rd layer
    block13=new Block (330,580,30,40);
    block14=new Block (360,580,30,40);
    block15=new Block (390,580,30,40);
    //stand2 4th layer
    block16=new Block (360,620,30,40);
    //stand1 1st layer
    block17=new Block (480,340,30,40);
    block18=new Block (510,340,30,40);
    block19=new Block (540,340,30,40);
    block20=new Block (570,340,30,40);    
    block21=new Block (600,340,30,40);
    //stand1 2nd layer
    block22=new Block (510,380,30,40);
    block23=new Block (540,380,30,40);
    block24=new Block (570,380,30,40);
    //stand1 3rd layer
    block25=new Block (540,420,30,40);

    stand1=new Ground(460,320,190,20);
    stand2=new Ground(250,520,250,20);
    
    slingshot=new Slingshot(hexagonImg,{x:28,y:180});
}

function draw(){
    hexagon(hexagonImg);
    Engine.update(engine);
    strokeWeight(4);

    stroke(15);
    fill("light blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    stroke(15);
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    stroke(15);
    fill("sea green");
    block13.display();
    block14.display();
    block15.display();
    stroke(15);
    fill("grey");
    block16.display();
    stroke(15);
    fill("light blue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    stroke(15);
    fill("sea green");
    block22.display();
    block23.display();
    block24.display();
    stroke(15);
    fill("pink");
    block25.display();

    stand1.display();
    stand2.display();
    slingshot.display();

    text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",10,10);
}
function mouseDragged(){
    Matter.Body.setPosition(this.hexagon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
