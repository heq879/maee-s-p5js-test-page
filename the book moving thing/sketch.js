let book;
    let angle = 0;

    function preload() {
      book = loadImage('open-book-1.png');
    }

    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      background(0,0,255);

      translate(width / 2, height / 2);

      let flip = map(mouseX, 0, width, -PI/2, 0);
      angle = lerp(angle, flip, 0.1);
       push();
      rotate(angle);
      image(book, -book.width / 2, -book.height / 2);
      pop();

      // Draw the right page
      push();
      scale(-1, 1);
      rotate(-angle);
      image(book, -book.width / 2, -book.height / 2);
      pop();
    }