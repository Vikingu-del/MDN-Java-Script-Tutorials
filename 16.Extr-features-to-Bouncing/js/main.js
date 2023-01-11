import Shape from "./shape.js";
import Player from "./player.js";
import PlayerOne from "./player1.js";
import PlayerTwo from "./player2.js";
import Ball from "./ball.js";
// setup canvas
const body = document.querySelector("body");
const para = document.querySelector(".ball-count");
let count = 0;

const para1 = document.querySelector(".player1");
let count1 = 0;

const para2 = document.querySelector(".player2");
let count2 = 0;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// We create this array to populete with created balls till we create 25 balls in the page
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball);
  count += 1;
  para.textContent = "Ball count: " + count;
}

const playerOne = new PlayerOne(random(0, width), (0, height));
const playerTwo = new PlayerTwo(random(0, width), (0, height));

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, .25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    if (ball.exists) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  playerOne.draw();
  playerOne.checkBounds();
  playerOne.collisionDetect();

  playerTwo.draw();
  playerTwo.checkBounds();
  playerTwo.collisionDetect();
  if (count === 0) {
    body.removeChild(canvas);
    body.removeChild(para);
    body.removeChild(para1);
    body.removeChild(para2);
    const H2 = document.createElement("h2");
    H2.textContent =
      count1 < count2
        ? "Player 2 won the Game!"
        : count1 > count2
        ? "Player 1 won the Game!"
        : "Draw Game!";
    body.appendChild(H2);
    body.style.backgroundColor = "black";
  } else {
    requestAnimationFrame(loop);
  }
}

loop();
