var basketImg, basket;
var flowerForest_Img;
var pinkFlower_Img, pinkFlower;

function preload(){
  flowerForest_Img = loadImage("assets/flower_forest.png");
  basketImg = loadImage("assets/basket.png");
}



function setup(){
  createCanvas(900,900);

  //Creating Basket sprites:

    basket = createSprite(500, 750, 20, 20);
    basket.addImage("baskettt", basketImg);
    basket.scale = 0.5;

 

  
}

function draw() {
  
  background(flowerForest_Img);  
  drawSprites();
}