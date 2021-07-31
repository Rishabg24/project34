//Create variables here
var dog
var foodStock
var foodS
var happyDog
var database
function preload()
{
	//load images here
  dogImg=loadImage("images/doglmg.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
 foodStock=database.ref("food")
 foodStock.on("value",readStock);

  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}

function readStock(data){
foodS=data.val();
}


function writeStock(x){
database.ref('/').update({
Food:x

})
}



