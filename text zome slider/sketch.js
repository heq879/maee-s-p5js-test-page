let zoomSlider;

let textContent = `so,
red. so,
red.
it was
never a sweet, syrupy ink that streamed through my palm,
but a path,
from the cord blood she carried when she crawled out of me.
it was
never the birth of a shared destiny,
but the birth of a saw that cut up my organ,
of her, splitting it open, and splashing it on the metal tray.
it was
never the delivery dress I was put into,
but the white cloth they draped my body in as it was anesthetized,
or a lid they placed on this container soon to be emptied.
the night felt like a thousand years,
a century of swim,
a peculiar self-dampness of solitude,
that imbued me on this pile of barren beds.
so,
red.
SO,
RED.`;

function setup() {
  createCanvas(1280, 1920);
  zoomSlider = createSlider(1, 5, 1, 0.1);
  zoomSlider.position(10, height + 10);
  zoomSlider.style('width', '80px');
}

function draw() {
  background(0, 0, 255);
  let zoomLevel = zoomSlider.value();
  let fontSize = min(10 * zoomLevel, 1000);

  
  textSize(fontSize);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255);
  text(textContent, width / 2, height / 2);
}

