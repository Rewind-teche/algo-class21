var obj2, obj1;

function setup() {
  createCanvas(1200,800);
  object2 = createSprite(400, 100, 50, 80);
  object2.shapeColor = "green";
  object2.debug = true;
  object1 = createSprite(400, 500,80,30);
  object1.shapeColor = "green";
  object1.debug = true;

  object3 = createSprite(400,300,100,20);
  object3.shapeColor = "yellow";


 // object1.velocityY = -5;
 // object2.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  //bounceoff(object1, object2);
  object3.x = World.mouseX;
  object3.y = World.mouseY;

  if(isTouching(object2,object3))
  {
     object2.shapeColor = "purple";
     object3.shapeColor = "pink";
  }
  else
  {
    object2.shapeColor = "green";
     object3.shapeColor = "green"; 
  }
  drawSprites();
}


