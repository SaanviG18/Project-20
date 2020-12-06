var car, wall; 
var speed, weight;

function setup() {
  createCanvas(1300,400);
  
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  car= createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1200,200,60,200);
  wall.shapeColor = color(80,80,80);


  
}

function draw() {
  background(0); 
  
text("Speed:"+ speed, 800,350);
text("Weight:"+ weight, 900,350);

  //changing the car's colors
 if(wall.x-car.x < (car.width + wall.width)/2){

  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/ 22500;

  if(deformation < 100){
    car.shapeColor = "green";}

  if(deformation < 180 && deformation >100 ){
    car.shapeColor= color(255,255,0);}

  if(deformation<180){
    car.shapeColor=color(255,0,0);}
  }
  
  drawSprites();
}