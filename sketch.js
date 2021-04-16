var catruning,catcollide;
var mousestanding,mousecollide;
var backgr;
var cat;
var mouse;
function preload() {
    //load the images here
    backgr = createSprite (500,400,1000,800);

    catruning= loadImage ("images/cat2.png");
 catcollide = loadImage ("images/cat4.png");





mousestanding = loadImage("images/mouse3.png")

   mousecollide = loadImage ("images/mouse1.png");

  
 
 backgrimage = loadImage ("images/garden.png")
   //   mousestanding = loadAnimation ("images/mouse1.png", "images/mouse2.png", "images/mouse3.png","images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(900,600,40,40)
cat.addImage (catcollide);
cat.scale=0.1;
cat.debug = true;
cat.setCollider("rectangle",0,0,10,10);
//cat.shapeColor = "red";
//cat.velocityX = -(1*3/5*10);
//cat.velocityY = -2;

mouse = createSprite (100,600,40,40);
mouse.addImage(mousestanding);
mouse.scale = 0.1;
mouse.setCollider("rectangle",0,0,10,10);
//mouse.shapeColor = "red";
mouse.debug = true;
//mouse.velocityX = (1*3/5*10);
backgr.addImage (backgrimage);


}

function draw() {

    background(255);


//cat.x=mouseX;
//cat.y=mouseY;

    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x < cat.width/2 + mouse.width/2){
        cat.velocityX = cat.velocityX * 0
        cat.addImage (catcollide);
        mouse.addImage(mousecollide);
    
    }
    else {
        mouse.addImage (mousestanding);
    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat.velocityX = -5
cat.addImage (catruning)

}

}