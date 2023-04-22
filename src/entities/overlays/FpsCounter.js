import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/game.js";

export class FpsCounter {
  constructor() {
    this.fps = 0;
  }

  update(time) {
    this.fps = Math.trunc(1 / time.secondPassed);
  }

  draw(ctx) {
    ctx.font = "14px Arial";
    ctx.fillStyle = "#00FF00";
    ctx.textAlign = "right";
    ctx.fillText(`${this.fps}`, SCREEN_WIDTH - 2, SCREEN_HEIGHT - 2);
  }
}
