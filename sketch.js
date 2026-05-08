let img;

let spots = [];

function preload() {
  img = loadImage("/assets/COMD241_05_TC_F25_Jordan_Laikram_p1_01_symbols_ideogram .png");
}

function setup() {
  let c = createCanvas(900, 900);
  c.style("background", "transparent");

  // spots only on jacket area 
  for (let i = 0; i < 70; i++) {
    spots.push({
      x: random(150, 470),
      y: random(470, 900), //
      baseSize: random(8, 20),
      speed: random(0.01, 0.06),
      offset: random(TWO_PI)
    });
  }
}

function draw() {
  clear();

  image(img, 0, 0, 600, 800);

  noStroke();
  fill(255, 225);

  // pulsing circles
  for (let s of spots) {

    let pulse = sin(frameCount * s.speed + s.offset);

    let size = s.baseSize + pulse * 15;

    ellipse(s.x, s.y, size, size);
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("jacket-spots", "png");
  }
}