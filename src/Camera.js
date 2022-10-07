import {
  STAGE_PADDING,
  SCROLL_BOUNDRY,
  STAGE_WIDTH,
  STAGE_HEIGHT,
} from "./constants/stage.js";

export class Camera {
  constructor(x, y, fighters) {
    this.position = { x, y };
    this.fighters = fighters;
  }

  update(time, ctx) {
    this.position.y =
      -6 +
      Math.floor(
        Math.min(this.fighters[1].position.y, this.fighters[0].position.y) / 10
      );

    const lowX = Math.min(
      this.fighters[1].position.x,
      this.fighters[0].position.x
    );
    const highX = Math.max(
      this.fighters[1].position.x,
      this.fighters[0].position.x
    );

    if (highX - lowX > ctx.canvas.width - SCROLL_BOUNDRY * 2) {
      const midPoint = (highX - lowX) / 2;
      this.position.x = lowX + midPoint - ctx.canvas.width / 2;
    } else {
      for (const fighter of this.fighters) {
        if (
          (fighter.position.x < this.position.x + SCROLL_BOUNDRY &&
            fighter.velocity.x * fighter.direction < 0) ||
          (fighter.position.x >
            this.position.x + ctx.canvas.width - SCROLL_BOUNDRY &&
            fighter.velocity.x * fighter.direction > 0)
        ) {
          this.position.x +=
            fighter.velocity.x * fighter.direction * time.secondPassed;
        }
      }
    }

    if (this.position.x < STAGE_PADDING) {
      this.position.x = STAGE_PADDING;
    }
    if (this.position.x > STAGE_WIDTH + STAGE_PADDING - ctx.canvas.width) {
      this.position.x = STAGE_WIDTH + STAGE_PADDING - ctx.canvas.width;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
    }
    if (this.position.y > STAGE_HEIGHT - ctx.canvas.height) {
      this.position.y = STAGE_HEIGHT - ctx.canvas.height;
    }
  }
}
