import {
  TIME_DELAY,
  TIME_FRAME_KEYS,
  TIME_FLASH_DELAY,
} from "../../constants/battle.js";
import { drawFrame } from "../../utils/context.js";

export class StatusBar {
  constructor(fighters) {
    this.image = document.querySelector('img[alt="misc"]');

    this.time = 99;
    this.timeTimer = 0;
    this.timeFlashTimer = 0;
    this.useFlashFrames = false;

    this.fighters = fighters;

    this.frames = new Map([
      ["health-bar", [16, 18, 145, 11]],

      ["ko-white", [161, 16, 32, 14]],

      [`${TIME_FRAME_KEYS[0]}-0`, [16, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-1`, [32, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-2`, [48, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-3`, [64, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-4`, [80, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-5`, [96, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-6`, [112, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-7`, [128, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-8`, [144, 32, 14, 16]],
      [`${TIME_FRAME_KEYS[0]}-9`, [160, 32, 14, 16]],

      [`${TIME_FRAME_KEYS[1]}-0`, [16, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-1`, [32, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-2`, [48, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-3`, [64, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-4`, [80, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-5`, [96, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-6`, [112, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-7`, [128, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-8`, [144, 192, 14, 16]],
      [`${TIME_FRAME_KEYS[1]}-9`, [160, 192, 14, 16]],

      // Name tags
      ["tag-ken", [128, 56, 30, 9]],
      ["tag-ryu", [16, 56, 28, 9]],
    ]);

    const [{ name: name1 }, { name: name2 }] = this.fighters;

    this.names = [`tag-${name1.toLowerCase()}`, `tag-${name2.toLowerCase()}`];
  }
  drawFrame(ctx, frameKey, x, y, direction = 1) {
    drawFrame(ctx, this.image, this.frames.get(frameKey), x, y, direction);
  }
  updateTime(time) {
    if (time.previous > this.timeTimer + TIME_DELAY) {
      //  if (this.time > 0) {
      this.time -= 1;
      //  }
      this.timeTimer = time.previous;
    }

    if (
      this.time < 15 &&
      this.time > -1 &&
      time.previous > this.timeFlashTimer + TIME_FLASH_DELAY
    ) {
      this.useFlashFrames = !this.useFlashFrames;
      this.timeFlashTimer = time.previous;
    }
  }

  update(time) {
    this.updateTime(time);
  }

  drawHealthBars(ctx) {
    this.drawFrame(ctx, "health-bar", 31, 20);
    this.drawFrame(ctx, "ko-white", 176, 18);
    this.drawFrame(ctx, "health-bar", 353, 20, -1);
  }

  drawNameTags(ctx) {
    const [name1, name2] = this.names;

    this.drawFrame(ctx, name1, 32, 33);
    this.drawFrame(ctx, name2, 322, 33);
  }

  drawTimer(ctx) {
    const timeString = String(Math.max(this.time, 0)).padStart(2, "00");
    const flashFrame = TIME_FRAME_KEYS[Number(this.useFlashFrames)];

    this.drawFrame(ctx, `${flashFrame}-${timeString.charAt(0)}`, 178, 33);
    this.drawFrame(ctx, `${flashFrame}-${timeString.charAt(1)}`, 194, 33);
  }

  draw(ctx) {
    this.drawHealthBars(ctx);
    this.drawNameTags(ctx);
    this.drawTimer(ctx);
  }
}
