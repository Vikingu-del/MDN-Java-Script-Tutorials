import Player from "./player.js";
const balls = [];
class PlayerOne extends Player {
  constructor(x, y) {
    super(x, y);
    this.color = "white";
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;

        case "d":
          this.x += this.velX;
          break;

        case "w":
          this.y -= this.velY;
          break;

        case "s":
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
          count1 += 1;
          para.textContent = "Ball count: " + count;
          para1.textContent = "Player 1: " + count1;
        }
      }
    }
  }
}
export default PlayerOne;
