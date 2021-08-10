const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;

var engine, world
var bg
var snow, snow2, snow3, snow4, snow5, snow6, snow7;

var person;

var snows = [];

function preload() {
  bg = loadImage("images/snow1.jpg")
  walk = loadAnimation("images/image1.png", "images/image2.png", "images/image3.png")
  image1 = loadAnimation("images/image1.png")
  image2 = loadAnimation("images/image2.png")
  image3 = loadAnimation("images/image1.png");
  snowmanImg = loadImage("images/snowman.png")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = .1
  createCanvas(800, 400);

  person = createSprite(20, 340, 20, 20);
  person.addAnimation("walk", walk);
  person.velocityX = 3;

  snowman = createSprite(200, 235);
  snowman.addImage(snowmanImg);
  snowman.scale = .2

  //ground = new Ground(600,height,1200,20);


  /*snow = new Snow(random(0, 800), 20)
  snow2 = new Snow(random(0, 800), 40)
  snow3 = new Snow(random(0, 800), 20)
  snow4 = new Snow(random(0, 800), 40)
  snow5 = new Snow(random(0, 800), 20)
  snow6 = new Snow(random(0, 800), 40)
  snow7 = new Snow(random(0, 800), 20)*/
}

function draw() {
  background(bg);
  Engine.update(engine)
  //ground.display();
    /*snow.display()
    snow2.display();
    snow3.display();
    snow4.display();
    snow5.display();
    snow6.display();
    snow7.display();
*/
  if (person.x > 800) {
    person.x = -10;
  }

  if(frameCount%30===0){
    snows.push(new Snow(random(0,800),20));
  }

 for (var j = 0; j < snows.length; j++) {
  
    snows[j].display();
  }
  drawSprites();
}