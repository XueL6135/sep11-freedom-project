





/* let catmeme;
let catimg;
let catgerms;

let bearimg;
let bearX = 0;
let player
let catman

 function preload(){
  catimg = loadImage("catcough.jpg")
  catgerms = loadImage("yucky.png")
  bearimg = loadImage("brown.png")
  catman = loadAnimation(["Untitled86_20250112213346.png","Untitled86_20250112213340.png","Untitled86_20250112213336.png", "Untitled86_20250112213328.png", "IMG_2599.png"])
}


function setup() {
  new Canvas (800, 1000, "pixelated");

  player = new Sprite();

  player.addAni(catman);

  catmeme = new Sprite();
  catidem = new Sprite();

  catmeme.image = catimg;
  catidem.image = catgerms;
}

  function draw() {
    background(catimg);

    image(bearimg, bearX, 0);
    image(bearimg, bearX + width, 0);
    bearX--;
    if(bearX < -width) bearX = 0;

    catidem.moveTo(mouse, 10);


  }
  */



/* let gameState = 'intro'

function setup() {
  new Canvas(3000,3000, 'pixelated' )
}

function preload(){
  catimg = loadImage("catcough.jpg")
}

function draw(){

  if(gameState == "intro") intro();
  if(gameState == "runGame") runGame();
}

function intro(){
 background ("skyblue");

 fill('black')
 textAlign(CENTER);
 textSize(100)
 text("gato gambler", width/2, height/2-100)
 // the text, the width and how where its going to go, -100 means to the left, -100 for height means moving the text upwards.

 fill('black')
 textSize(72)
 text("click", width/2, height/2)

 if (mouse.presses()){
  gameState = "runGame";
 }
}

function runGame(){
  background(catimg);
}
*/

let bgimg
let canX = 750
let canY = 750

let MuellerSUnimg

let cloudsImg
let cloudsX = 0

let flowerimg
let flowersX = 0

let frenchsound

function preload() {
  cloudsImg = loadImage("Untitled91_20250323163514.png")
  flowerimg = loadImage("Untitled91_20250323163509.png")
  bgimg = loadImage("Untitled91_20250323163504.jpeg")
  MuellerSUnimg = loadImage("Untitled91_20250323163520.png")

  soundFormats("mp3")
  frenchsound = loadSound("PeriTune_Alleyway-chosic.com_.mp3")

}

function setup() {
  new Canvas(canX ,canY, )
  MuellerSUnimg.resize(canX, canY)

  bgimg.resize(canX, canY)
  flowerimg.resize(canX, canY)
  cloudsImg.resize(canX, canY)

  backgroundMusic();
}

function backgroundMusic(){
  frenchsound.play();
  frenchsound.loop();
  frenchsound.setVolume(1);
  // userStartAudio()
}



function draw()
{
  background(bgimg)

  // sun
  image(MuellerSUnimg, 0 ,0 )
  /*MuellerSUnimg.rotation = 90;
  MuellerSUnimg.rotationSpeed = 1; */


  // flowers
  image(flowerimg, flowersX, 0);
  image(flowerimg, flowersX + width, 0);
  flowersX -= 2;
  if(flowersX < -width) flowersX = 2;

// clouds
  image(cloudsImg, cloudsX, 0);
  image(cloudsImg, cloudsX + width, 0);
  cloudsX-= 2.5;
  if(cloudsX < -width) cloudsX = 0;
}
