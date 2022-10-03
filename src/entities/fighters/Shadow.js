import { STAGE_FLOOR } from "../../constants/stage.js";

export class Shadow {
  constructor(fighter) {
    this.image = document.querySelector('img[alt="shadow"]');
    this.fighter = fighter;
    this.frame = [
      [0, 0, 68, 11],
      [34, 7],
    ];
  }

  update() {}

  draw(ctx) {
    const [[x, y, width, height], [originX, originY]] = this.frame;

    ctx.drawImage(
      this.image,
      x,
      y,
      width,
      height,
      Math.floor(this.fighter.position.x - originX),
      Math.floor(STAGE_FLOOR - originY),
      width,
      height
    );
  }
}
