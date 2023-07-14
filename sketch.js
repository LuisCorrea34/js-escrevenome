function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
    strock("blue");
    fill("red");
    if(MouseIsPressed){
      rect(mouseX,mouseY,20,35);
    }
  }