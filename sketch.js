var x = 50;
var y = 200;
var speedx = 3;
var speedy = 3;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(50);
    
    //background changes when clicked
    if(mouseIsPressed){
        background(255, 0, 200)
    }
    
    //makes outline white, no color in shape
    stroke(255);
    strokeWeight(6);
    
    if(mouseY < 150){
        fill(0, 255, 0);
    }
    else{
        noFill();
    }
    
    //circle
    ellipse(x, y, 100, 100);
    
    //this makes the cirlce move on its own
   if(x + 50 > width || x - 50 < 0){
       speedx = -speedx; 
   }
   
   if(y + 50 > height || y - 50 < 0){
       speedy = -speedy; 
   }
   
    x = x + speedx;
    y = y + speedy;
    console.log(x);
    
}