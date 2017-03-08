var x = 50;
var y = 200;
var x2 = 250;
var y2 = 200;
var x3 = 250;
var y3 = 200;
var x4 = 250;
var y4 = 200;
var x5 = 50;
var y5 = 200;

var speedx = 3;
var speedy = 3;
var speedx2 = 5;
var speedy2 = 4;
var speedx3 = 2;
var speedy3 = 2;
var speedx4 = 2;
var speedy4 = 2;
var speedx5 = 2;
var speedy5 = 2;

var img;
var img2;
var img3;
var img4;
var img5;


function preload() {
  img = loadImage("rr.jpg");
  img2 = loadImage("celtics.png");
  img3 = loadImage("lakers.jpg-large");
  img4 = loadImage("dunk.jpg");
  img5 = loadImage("budi.jpg");
  
  
}

function setup(){
    createCanvas(600, 400);
    
    image(img, 0, 0);
    image(img, 0, 0, 100, 100);
    image(img, 0, 0, 100, 100, 0, 0, 100, 100);
    
    image(img2, 0, 0);
    image(img2, 0, 0, 100, 100);
    image(img2, 0, 0, 100, 100, 0, 0, 100, 100);
    
    image(img3, 0, 0);
    image(img3, 0, 0, 100, 100);
    image(img3, 0, 0, 100, 100, 0, 0, 100, 100);
    
    image(img4, 0, 0);
    image(img4, 0, 0, 100, 100);
    image(img4, 0, 0, 100, 100, 0, 0, 100, 100);
    
    image(img5, 0, 0);
    image(img5, 0, 0, 100, 100);
    image(img5, 0, 0, 100, 100, 0, 0, 100, 100);
    
}

function draw(){

    background(255, 0, 200);
    
    textSize(32);
    text("Try Pressing The Arrow Keys", 100, 30);
    
    image(img,x,y, 200, 150);
    
    //background changes when clicked
    if(keyIsDown(LEFT_ARROW)){
        background(0, 255, 0);
        image(img2,x2,y2, 200, 150);
    }
    
    //changes when space is pressed
    if(keyIsDown(UP_ARROW)){
        background(255, 0, 0);
        image(img3,x3,y3, 250, 200);
    }
    
    //changes when space is pressed
    if(keyIsDown(RIGHT_ARROW)){
         background(0, 0, 255);
         image(img4,x4,y4, 250, 200);
    }
    
    if(keyIsDown(DOWN_ARROW)){
         background(255, 0, 0);
         image(img5,x5,y5, 250, 200);
    }
    
    //this makes the element bounce
   if(x + 200 > width || x < 0){
       speedx = -speedx; 
   }
   
   if(y + 150 > height || y < 0){
       speedy = -speedy;
   }
   
   //celtics
   if(x2 + 200 > width || x2 < 0){
       speedx2 = -speedx2; 
   }
   
   if(y2 + 150 > height || y2 < 0){
       speedy2 = -speedy2;
   }
   
   //lakers
   if(x3 + 250 > width || x3 < 0){
       speedx3 = -speedx3; 
   }
   
   if(y3 + 200 > height || y3 < 0){
       speedy3 = -speedy3;
   }
   
   //gif
   if(x4 + 250 > width || x4 < 0){
       speedx4 = -speedx4; 
   }
   
   if(y4 + 200 > height || y4 < 0){
       speedy4 = -speedy4;
   }
   
   //da
   if(x5 + 250 > width || x5 < 0){
       speedx5 = -speedx5; 
   }
   
   if(y5 + 200 > height || y5 < 0){
       speedy5 = -speedy5;
   }
   
   
    x = x + speedx;
    y = y + speedy;
    
    x2 = x2 + speedx2;
    y2 = y2 + speedy2;
    
    x3 = x3 + speedx3;
    y3 = y3 + speedy3;
    
    x4 = x4 + speedx4;
    y4 = y4 + speedy4;
    
    x5 = x5 + speedx5;
    y5 = y5 + speedy5;
    console.log(x);
    
}

// bounce off each other
//   if(x + 100 == x2){
//       speedx = -speedx;
//       speedx2 = -speedx2;
//   }
   
//   if(x2 + 100 == x){
//       speedx = -speedx;
//       speedx2 = -speedx2;
//   }