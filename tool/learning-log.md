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







<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
