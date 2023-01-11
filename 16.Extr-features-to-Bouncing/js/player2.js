import Player from "./player.js";
const balls = [];
class PlayerTwo extends Player {
  constructor(x, y) {
    super(x, y);
    this.color = "yellow";
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.x -= this.velX;
          break;

        case "ArrowRight":
          this.x += this.velX;
          break;

        case "ArrowUp":
          this.y -= this.velY;
          break;

        case "ArrowDown":
          this.y += this.velY;
          break;
      }
    });
  }

  collisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false;
          count -= 1;
          count2 += 1;
          para.textContent = "Ball count: " + count;
          para2.textContent = "Player 2: " + count2;
        }
      }
    }
  }
}
export default PlayerTwo;
