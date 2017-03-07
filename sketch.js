var x = 50;
var y = 200;
var speedx = 3;
var speedy = 3;
var img;

function preload() {
  img = loadImage("rr.jpg");
}

function setup(){
    createCanvas(600, 400);
    
    image(img, 0, 0);
    image(img, 0, 0, 100, 100);
    image(img, 0, 0, 100, 100, 0, 0, 100, 100);
}

function draw(){
    background(50);
    
    image(img,x,y, 200, 150)
    
    //background changes when clicked
    if(mouseIsPressed){
        background(255, 0, 200)
    }
    
    //this makes the cirlce move on its own
   if(x + 200 > width || x < 0){
       speedx = -speedx; 
   }
   
   if(y + 150 > height || y < 0){
       speedy = -speedy; 
   }
   
    x = x + speedx;
    y = y + speedy;
    console.log(x);
    
}