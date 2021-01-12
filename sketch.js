var bullet,wall,thickness;
var speed,weight ;




function setup() {
  createCanvas(1600,800);
thickness=random(22,83);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  wall=createSprite(1100,200,thickness,height/2)
}


function draw() {
  background(255,255,255);  
 /* if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {

    bullet.shapeColor=color(255,0,0);
 }
 // if(deformation<180&&deformation>100)
 // {
 //   bullet.shapeColor=color(230,230,0);
 // }
  if(deformation<100)
  {
    bullet.shapeColor=color(0,255,0);
  }
}*/
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damag=0.5*weight*speed*speed/(thickness*thickness*thickness);
}
if (damag>10){
  wall.shapeColor=color(0,255,0);
}
if (damag<10){
  wall.shapeColor=color(255,0,0);
}
  drawSprites();
}

function hascollide(Lbullet,Lwall){
bulletRightEdge=Lbullet.x-Lbullet.width;
wallRightEdge=wallL.x;
if(bulletRightEdge>=wallRightEdge){
  return true
}
return false
}