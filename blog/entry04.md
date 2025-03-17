# Entry 4
##### 3/10/25
# content
From the last progress I learned about my tool that i can move the backgrounds freely, and use it to make it into a background for my upcoming MVP, I have also learned how to use Game stats which is like switching from one screen to another, like making a homescreen and then once you click the specific button it goes to the game load and it then starts the real game. ( probably my next goal is to get the score to load and being able to decrease the score once it presses something and keeping track of the socre.)

[Screen recording 2025-03-02 10.18.15 PM.webm](https://github.com/user-attachments/assets/44a7af57-a83c-4f44-93ec-671fab689610)

```
let cloudsImg
let cloudsX = 0

let beesImg
let bees
//let beesX = 0 // making a variable like this helps when you need it at a specific position

function preload() {
  cloudsImg = loadImage("IMG_2816.png")
  beesImg = loadImage("IMG_2818.png")
}

function setup() {
  new Canvas(3000,3000, 'pixelated' )

  bees = new Sprite()
  bees.image = beesImg

  mouse.visible = true // (just shows your curser you can make it false and make it invisible)
}

function draw()
{
  background('skyblue')

  bees.moveTo(mouse, 2) // simple code to make the sprite go with the mouse
  // bees
  /*image(beesImg, int(beesX), 0); //(i wanted to made it move but then i chnaged my mind)
  image(beesImg, int(beesX) + width, 0);
  beesX -=0.7;
  if(beesX < -width) beesX = 0;
  */ // (which you put which code first actually determinds what goes first and the layer will go behind from there)
// clouds
  image(cloudsImg, int(cloudsX), 0);
  image(cloudsImg, int(cloudsX) + width, 0);
  cloudsX-= 1.2;
  if(cloudsX < -width) cloudsX = 0;
}
```
- was testing out the background see if it would work on not even a pixel bakcground but a smooth and drawn.

 [Screen recording 2025-03-09 9.48.16 PM.webm](https://github.com/user-attachments/assets/15dc3242-9230-4aab-a452-55683cac7c02)

 ```
 let gameState = 'intro'

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
```

the different functions serves as a different screen and what it does on that screen and whats special is that by a single click you can bring it to another scren with that data and that could be very useful.

## MVP

so right now towards our mvp by using gamestats i want to make a sort of home screen so when you press the button you can enter the system and that can store all yor data, in whic you will use the ¨data and use it to exchange for stuff.

# EDP
Right now We are pretty much done with learning with our tool , and i want to start on our MVP now, and the onyl thing we are missing is the score board and how we can be able to transfer the data from another game screen, and use that to make our currency that we are going to use, but other then that we are probably good to go on the rest by making the system, so i plan a (math.random) to do the job for the ¨gacha system¨ and how the rarity is going to go for, for each section, so we need different arrays for that and each array is going to have a math.random, but first we need to use math.random for selecting a random array out of the arrays, with a specific rarity.
  
# skills

### planning 
-Is important to use as it involves a lot of going in and out and in and keeping track of the percentage of rarities and how we are going to calculate this. I would not reccommend myself plannig this on code becuase i feel like there will be errors and it will just create mroe errors so i want to plan this out on paper and how the code is going to go. 




[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
