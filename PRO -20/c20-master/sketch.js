
var r = 0;
var g = 50;
var b = 255;


function setup(){
  createCanvas(1200,400); 
}


function draw(){
 
  background(r,g,b);
  fill("grey");
  ellipse(mouseX,mouseY,40,40);
  r,g,b = map(mouseX,0,1200,0,255);

  drawSprites();
 
}
 // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.