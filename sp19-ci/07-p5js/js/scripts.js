let song;
let NUMSINES = 1; // how many of these things can we do at once?
let sines = new Array(NUMSINES); // an array to hold all the current angles
let rad; // an initial radius value for the central sine
let i; // a counter variable
let rms;

let colors;

// play with these to get a sense of what's going on:
let fund = 0.001; // the speed of the central sine
let ratio = 1; // what multiplier for speed is each additional sine?
let alpha = 255; // how opaque is the tracing system

let drawColor;
let drawSize = 15;

function preload() {
   song = loadSound('/audio/gods-plan.mp3');
}

function setup() {
   createCanvas(windowWidth, windowHeight);

   rad = height / 4; // compute radius for central circle
   background(255); // clear the screen

   analyzer = new p5.Amplitude();
   analyzer.setInput(song);

   song.play();


   colors = [color('#feeb79'), color('#101ea1'), color('#f835f8'), color('#232822'), color('#a891e9')];

   drawColor = color('#1d1d1d');

   for (let i = 0; i < sines.length; i++) {
      sines[i] = PI; // start EVERYBODY facing NORTH
   }
}

function draw() {
   rms = analyzer.getLevel();

   if (song.isPlaying()) {
      drawSize = 1 + rms * 10;
      if(frameCount%77 === 0) {
         drawColor = getRandomColor();
      }

      // MAIN ACTION
      push(); // start a transformation matrix
      translate(width / 2, height / 2); // move to middle of screen

      for (let i = 0; i < sines.length; i++) {
         let erad = 0;
         // setup for tracing
         noStroke();
         fill(drawColor);
         erad = 1.0 * (1.0 - float(i) / sines.length); // pen width will be related to which sine
         let radius = rad / (i + 1); // radius for circle itself
         rotate(sines[i]); // rotate circle
         push(); // go up one level
         translate(0, radius + (1 + rms * 300)); // move to sine edge

         ellipse(0, 0, drawSize, drawSize); // draw with erad if tracing
         pop(); // go down one level
         translate(0, radius); // move into position for next sine
         sines[i] = (sines[i] + (fund + (fund * i * ratio))) % TWO_PI; // update angle based on fundamental
      }

      pop(); // pop down final transformation
   } // song.isPlaying()

}

function keyReleased() {
   if (key == ' ') {
      if (song.isPlaying()) { // .isPlaying() returns a boolean
         song.pause(); // .play() will resume from .pause() position
      } else {
         song.play();
      }
   }
}

// function mousePressed() {
//    drawColor = getRandomColor();
// }


//*****************************
// helpers
//*****************************

function getRandomColor() {
   return colors[int(random(0, colors.length))];
}