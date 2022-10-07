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

  draw(ctx, camera) {
    const [[x, y, width, height], [originX, originY]] = this.frame;

    const scale = 1 - (STAGE_FLOOR - this.fighter.position.y) / 250;

    ctx.globalAlpha = 0.5;
    ctx.drawImage(
      this.image,
      x,
      y,
      width,
      height,
      Math.floor(this.fighter.position.x - originX * scale),
      Math.floor(STAGE_FLOOR - originY * scale),
      Math.floor(width * scale),
      Math.floor(height * scale)
    );
    ctx.globalAlpha = 1;
  }
}
