let drawing = false;
let clearNextClick = false;

function setup() {
  createCanvas(1280, 1920);
  strokeWeight(10);
  newDrawingStyle();
  background(0, 0, 255);
}

function draw() {
  if (drawing) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function mousePressed() {
  if (clearNextClick) {
    background(0, 0, 255);
  } else {
    drawing = !drawing;
  }

  clearNextClick = !clearNextClick;

  if (drawing) {
    newDrawingStyle();
  }
}

function newDrawingStyle() {
  stroke(255);
  strokeWeight(10);
}


