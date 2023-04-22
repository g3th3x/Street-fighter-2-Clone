import {
  STAGE_PADDING,
  SCROLL_BOUNDRY,
  STAGE_WIDTH,
  STAGE_HEIGHT,
} from "../constants/stage.js";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/game.js";

export class Camera {
  constructor(x, y, fighters) {
    this.position = { x, y };
    this.fighters = fighters;
  }

  update(_, ctx) {
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

    if (highX - lowX > SCREEN_WIDTH - SCROLL_BOUNDRY * 2) {
      const midPoint = (highX - lowX) / 2;
      this.position.x = lowX + midPoint - SCREEN_WIDTH / 2;
    } else {
      for (const fighter of this.fighters) {
        if (fighter.position.x < this.position.x + SCROLL_BOUNDRY) {
          this.position.x = fighter.position.x - SCREEN_WIDTH + SCROLL_BOUNDRY;
        } else if (
          fighter.position.x >
          this.position.x + SCREEN_WIDTH - SCROLL_BOUNDRY
        ) {
          this.position.x = fighter.position.x - SCREEN_WIDTH + SCROLL_BOUNDRY;
        }
      }
    }

    // Max limits
    if (this.position.x < STAGE_PADDING) this.position.x = STAGE_PADDING;
    if (this.position.x > STAGE_WIDTH + STAGE_PADDING - SCREEN_WIDTH) {
      this.position.x = STAGE_WIDTH + STAGE_PADDING - SCREEN_WIDTH;
    }
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.y > STAGE_HEIGHT - SCREEN_HEIGHT) {
      this.position.y = STAGE_HEIGHT - SCREEN_HEIGHT;
    }
  }
}
