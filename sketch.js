function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    strock("blue");
    fill("red");
    if(MouseIsPressed){
      rect(mouseX,mouseY,20,35);
    }
  }