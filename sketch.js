const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, hammer, stone, rubber, iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    iron = new Iron(400,400,10,10);
    stone = new Stone(350,200,75,80);
    rubber = new Rubber(673,540,69);
    hammer = new Hammer(10,100);    
    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    rubber.display();
    iron.display();
    hammer.display(); 
}