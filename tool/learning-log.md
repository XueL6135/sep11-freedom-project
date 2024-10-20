# Tool Learning Log

## Tool: **p5play**

## Project: **Gato Gambler**

---

### 10/13/24:

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
10.15.24
---
In p5play they use:
*.y for placing things on the y-axis
*.w for how long the object will be
*.h for putting in the height of the object
-Sprites have dynamic physics as it allows the sprite to have the freely will to move but also get affected by its gravity and move straight down.







### 10/???/24:
* Text


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
