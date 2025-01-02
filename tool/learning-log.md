# Tool Learning Log

## Tool: **p5play**

## Project: **Gato Gambler**

---
(google docs)

### 10/19/24:

# Context
I chose [p5play](https://p5play.org/) because of their easy to learn codes and the many things that you can do with p5play, they not only give you a [tinker tool](https://editor.p5js.org/) but also a whole list of things that you can learn from their page, from sprites to animations to their unique physics, which i find very cool considering i used to play around with google space a lot when i was little. So I started using their tinker tool and started to learn straight from their page.

## Sprites
In p5play sprites play a major role when animating, when you first animate you want to know what sprite are you animating upon on. i learned that in p5play sprites can be any shape you like for example if you want a circle you can make one yourself. but to start to make one. you need a canvas to do so.

```
function setup() {
	new Canvas(300, 300);
}

function draw() {
	background('green');
}
```
The code above shows a canvas. with width and height of 300. using the function of draw it fills in the color of the canvas in this case i replaced it with the color "green". of course i tried to see how big the canvas can get and it can go **pretty far**
![Screenshot 2024-10-20 10 42 58 AM](https://github.com/user-attachments/assets/0d9f0df8-c303-4cd0-927d-60cab3189a67)
that was me when i tried to set the canvas size to 3000.

![Screenshot 2024-10-20 10 38 30 AM](https://github.com/user-attachments/assets/4df45f0f-85c3-47ca-9976-a4ee658907de)
but here how it should look like with a 300 width and height canvas.

(from my understanding the sprites are created with a call for them) I tried to tinker with the code that it gave me but it only came out as a error when i tried to tinker. I tried to understand why but at the same time i was confuded because the code showed the shape on the web but not on my code so in the end I had to dug in and i saw that when i went into the shapes sections specifically  a [circle](https://p5js.org/reference/p5/circle/) i copied its code and I could understand why its different because everything was differetn apart from the `function setup` which i learned sets up the image sprites. creatcancvas allows me to create the background for the sprite. (but id on't think it did it right).
```
function setup() {
  createCanvas(300, 300);

  background(300);

  circle(50, 50, 25);

  describe('A white circle with black outline in the middle of a gray canvas.');
}
```
10.20.24
---
In p5play they use:
*.y for placing things on the y-axis
*.w for how long the object will be
*.h for putting in the height of the object
-Sprites have dynamic physics as it allows the sprite to have the freely will to move but also get affected by its gravity and move straight down.

* There was a problem that I couldn't figure out why my code didn't show up on my tinker, but I understood how their code works but I just don’t know why the tinker platform didn’t work.
* I tried it on my IDE but I'm also having difficulties. I decided that enough time on trying to figure out one small thing. I decided to just do what I can do at my best.
* Which is to try to read the entire code before I can try out some things, maybe there could be a solution to this.

- Colliding with an object has many things you need to add for example floor.collider = 'static'; the floor.collider being another sprite and the static is which the colliders can’t be moved.
- and then there's “kinematic” which colliders can be moved in this case.
- But if we put “none” then the sprite will just go through the other sprite.
- `world.gravity.y = -1;` is basically anti gravity because of the negative sign the physics don’t work the same but instead goes the other way.
-`floor.**rotation**` = 2; allows the sprite to rotate a certain direction so that the sprite can move that direction (gravity)
-`floor.**velocity.y**` = -1; From what i can see it rises the platform the sprite is on. By its velocity of -1

I found out that even if the tinker tool goes wrong the website still has some practices for me to try at the end of each lesson of code.
![image](https://github.com/user-attachments/assets/b47a260e-295c-4746-b597-3ede4589d979)

**I think i may figure out**
- I asked one of my friends and it turns out I was missing some code and that cause my tinkering board to not act properly so now i can freely tinker.
- by adding:
- 
```
  function draw() {
	clear();
}
```

This is needed at every end when adding sprites or animating them otherwise you can't make them appear or let them do anything, i learned that because i put my rest of the code in and it didn't show anything. Then i see that it needs the function draw for it to appear.
making your sprite into different other things like a image you want isn't hard by using the `.image = '🥳';` you can = it to any kind of image you want, either from your assest or you can even put an emoji.

![image](https://github.com/user-attachments/assets/971ae1a0-d854-41c8-a8fb-6b04bef4c207)

p5play has alphebats that shape into different colors when you type a certain Alphabet one letter representing a pixel to color in
![image](https://github.com/user-attachments/assets/a0c0847b-c684-426e-80d3-d896e8f48db5)

you can always change the color of the alphabats too.
![image](https://github.com/user-attachments/assets/3e8fb7a8-a9b8-492a-be8a-d381b98eb3e5)


* These days time is of a essence and i could get most of these out of the website iteself the rest i need to sign up. for whats more i Might need to go to the [videos](https://youtu.be/ZQ23FHfgA0A?si=Vnx_i32bCbH6Mey3) that my friend showed me. its 30 minutes long but I think i can try...Since i know what I know what to do i'll continue my search tomorrow.
* 

# Learning log

10/27/24

[Thevideo](https://youtu.be/XsTXsHxgWJc?si=a9HOemx9wk-jo5N2)
Every objects in the p5play included its own mouse object
And the mouse includes like either: hovering, being clicked on an object.

```
If(block.mouse.hovering()) {
mouse.cursor = ‘grab’;
}
else {
mouse.cursor = ‘default’
}
```

This is the case of , if the cursor is hovering over the block sprite then the cursor will turn into a grab motion, if anything else then the cursor remains at default.
There are a few things like the pointer cursor or the arrow cursor.

```
If (block.mouse.dragging()) {
 block.moveTowards(mouse.x,mouse.y, 1);
}
```
We use dragging to drag our sprites onto a different place.

The function key pressed is important to know if the right or the left key is being pressed.

```
function keypressed() {
Ball.x = new sprite();
Ball.y = -50
Ball.diameter = 40
}
```

By pressing on keys you can make any ball appear
The default objects in p5play will rotate when objects hit them.
You can change it by:

```
Block.rotationLock = true;
```

It’s going to make the sprite of whichever you want stop moving or rotating whenever an object hits it.
But the more objects that get on to the sprite the sprite will lower as it gets too heavy.
Kinematic will affect the others but not the sprite.

11/24/24

![Screen recording 2024-11-24 9 14 10 PM](https://github.com/user-attachments/assets/b9bc2a3f-5e9c-426a-bd8d-e8f985b7dc1c)

Along with learning my tool i find `mouse.pressed()` to be very amusing as whenever i click on my canvas the sprite just  seems to appear and by changing the gravity of the y value by 5 `world.gravity.y = 5` the sprite falls from middle to bottom. but to change that i can use the `sprite.y` function to make it move starting from a certain place.

![Screen recording 2024-11-24 9 19 44 PM](https://github.com/user-attachments/assets/57a69d3e-ecb2-43d8-9114-76c80a529f56)

we can do this by using making the new sparks.Sprite as a variable and by using that as a vairle such as `let s = sparks.Sprite` we can use the vairble as `s.x = mouse.x` and `s.y = nouse.y` which causes whats above which is where ever i click my mouse nis where wver ill spawn a sprite.
or
we can use a function and that can help us store our x values.
![image](https://github.com/user-attachments/assets/45e2b3ff-f807-489a-a8a9-5696f5c06b94)
But **OR** we can use 
the `arrow function` which is a function that does the same thing but makes our life with coding a tiny bit easier. `() => mouse.y/x`
![image](https://github.com/user-attachments/assets/ccca5d60-cee3-4831-897f-b6d5dc13d65c)

The meaing of `  sparks.life = () => random(30,100)` mostly random is to move it from the between of these two numbers for example from 30-100, is what it will mean.

![Screen recording 2024-11-24 9 37 16 PM](https://github.com/user-attachments/assets/d887f3d6-bcbc-4a1a-b182-6826efcb3249)

i tried and played around to see if i can let my mouse whenver it is clicked it can spawn the sprites anywhere it wants randomly.

`sprites.amount` is pretty cool too as if the sprite amount is lower then the number for example 50 it will go as much as 50 and with one click you can have a lot of sprites:
![Screen recording 2024-11-24 9 41 19 PM](https://github.com/user-attachments/assets/5b0bba8c-6432-487d-8814-14d2a5312a7b)
but since i used random for my sprite.x/y when i click it, its everywhere.

`mouse.pressing` is when ever your mouse go, your sprite will go where ever your mouse go.

![Screen recording 2024-11-24 9 56 59 PM](https://github.com/user-attachments/assets/7941cd90-5a92-4732-a7d2-82117f19237d)
this is the end result of how i did it, moslty is because i played around with it and changed up some thigns that weren't followed in the video.

[video source](https://youtu.be/0t0xyBew5BQ?si=TWRl6oznhcPOXEqm)


12.8.24- motion
taking notes on the [video](https://www.youtube.com/watch?v=qBt_w3SELnw)
- `if(kb.pressing("left"))ship.rotation -=2;`
- `if(kb.pressing("right"))ship.rotation +=2;`
If the `kb` short for "keyboard" pressing down on the left/right key then the ship will rotate about -= and +=  by 2.

- using `applyForce` we can increase the amount of movement
  `ship.bearing = ship.rotation + 90;
  `sprite.applyForce(-30);
- the output would have been if any mouse kep is pressed the sprite should move to a random place with no gravitational pull.

-Bahavior changes
 - if (sprite.x > width + ship.w/2) sprite.x = -sprite.h/2
the sprite will run smoothly between screens.

- if you want to upload your image into the animation you use
  ```
   function preload(){
  sprite = loadimage("sprite.png")
  }
  ```
theres then `sprite.drag = 1` where it applies the resistance to the ship's movement when you drag it

giving the spite(speed)
`sprite.speed = () => random(4,5)` with a between speed of 4 and a 5.

12.14.24

`thing.bearing = thing.rotation + 90` with bearing you can make your sprites go float anywhere like no gravity

[Screen recording 2024-12-14 10.07.56 PM.webm](https://github.com/user-attachments/assets/eb0758d4-6a2a-4a02-aee4-3091598f5068)

see how the emoji floats smoothly?

12/31/24

[video](https://www.youtube.com/watch?v=1IzFWpSK5SE](https://www.youtube.com/watch?v=boyuLp3T9NI) - Background

- you set up the canvas to whatever your imagen is by either 435 x 213 or 579 x 290 either one and pixelated since the background is by pixels.
```
new Canvas( 435, 213, "pixelated")
```
- note while i was using my code in the IDE i tried to figure out why my image wasn't loading even though i did everything right its because that i ending my code with a : and not a ; and that single colon was the porblem.

![Screenshot 2025-01-01 11 20 29 PM](https://github.com/user-attachments/assets/d7e56723-12d7-4d20-b96c-2d159a21dea8)
![Screenshot 2025-01-01 11 20 50 PM](https://github.com/user-attachments/assets/f6cfab67-e1b1-4358-9909-7dc2f201c1c5)

- the higher the number the faster the imag drags around you
```
    catidem.moveTo(mouse, 10);
```
[Screen recording 2025-01-01 11.27.57 PM.webm](https://github.com/user-attachments/assets/a22c32fb-6529-4abb-8ff2-67b055890348)

- of course if you don't want to see your mouse on the screen you can use
  `mouse.visible = false;`
- using `image(.png, 0, 0);` you can paste your image like a layer of the background with more layers.

![Screenshot 2025-01-01 11 41 21 PM](https://github.com/user-attachments/assets/65cf6eb1-af4e-4128-b61e-d40ba06bb4ec)
- by using image double times and `+ width` the image can go on like a loop
  [Screen recording 2025-01-01 11.42.24 PM.webm](https://github.com/user-attachments/assets/dbc7b1b7-2054-48ac-b7fc-4a8473122adc)
  - the if statement is when for when the image goes too far then it will come back.





 

    









<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
