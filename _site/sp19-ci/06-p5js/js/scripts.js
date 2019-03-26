var ellipseDiameter = 40;
var ellipseRandom;
var colors;

function setup() {
   console.log('--setup--');
   createCanvas(windowWidth, windowHeight);
   colors = [color('#feeb79'), color('#101ea1'), color('#f835f8'), color('#232822'), color('#a891e9')]
}

function draw() {
   ellipseRandom = random(1, ellipseDiameter);
   noStroke();

   if (mouseIsPressed) {
      noStroke();
      fill(getRandomColor());
   } else {
      stroke(0);
      fill(255);
   }
   ellipse(mouseX, mouseY, ellipseRandom, ellipseRandom);
}

//*****************************
// helpers
//*****************************

function getRandomColor() {
   return colors[int(random(0, colors.length))];
}