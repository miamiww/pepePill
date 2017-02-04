//var pepeSmile = image("pepeSmile.png")
var playing = false;
var resist;
var pepeSmile;
var blueButton;
var redButton;


function setup() {
  createCanvas(450, 400);
  // specify multiple formats for different browsers
  pepeSmile = createVideo(['images/frown.mov']);
  resist = createVideo(['images/womensmarchgif2.mov']);

//  pepeSmile.loop(); // set the video to loopv and start playing
  pepeSmile.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // insteads
 resist.hide();
 blueButton = createButton('blue');
 redButton = createButton('red');
 blueButton.mousePressed(toggleVid); // attach button listener
 redButton.mousePressed(toggleVid); // attach button listener

}


function draw() {
//  background(255);

//  image(pepeSmile,10,10); // draw the video frame to canvas
//  filter('GRAY');
  tint(255, 100);  // Display at half opacity
  image(resist, 0,0, 700,400);
  image(pepeSmile,0,0);

}

function toggleVid() {
  if (playing) {
    pepeSmile.pause();
    resist.pause();

  } else {
    pepeSmile.play();
    resist.loop();

  }
  playing = !playing;
}
