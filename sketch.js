var dog,dogimage; 
var happyDog,happyDogimage; 
var database;
var foodS, foodStock;
var fedTime,lastFed;
var foodObj;  

function preload()
{
  dogimage = loadImage("dogImg.png");
  happyDogimage = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  
 dog = createSprite(50,180,20,50);
 dog.addImage("dog",dogimage);
 dog.scale=0.5;

 database = firebase.database();

 foodStock=database.ref('Food');
 foodStock.on("value",readStock);

 feed=createButton("Feed the dog");
 feed.position(700,95);
 feed.mousePressed(feedDog);

 addFood=createButton("Add Food");
 addFood.position(800,95);
 addFood.mousePressed(addFoods);
}

function draw() {  
  background(46,139,87);

  
 //if(keyWentDown(UP_ARROW)){
   //writeStock(foodS);
   //dog.addImage("happyDog",happyDogimage)
   //}

drawSprites();
 text();
 textSize(12);
 fill();
 stroke();

}

function readStock (data)  {
 foodS = data.val();
}

function writeStock (x)  {
  if (x<=0) {
    x=0
  } else {
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



