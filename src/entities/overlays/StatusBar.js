export class StatusBar {
  constructor(fighters) {
    this.image = document.querySelector('img[alt="misc"]');

    this.time = 99;
    this.timeTimer = 0;
    this.fighters = fighters;

    this.frames = new Map([
      ["health-bar", [16, 18, 145, 11]],

      ["ko-white", [161, 16, 32, 14]],

      ["time-0", [16, 32, 14, 16]],
      ["time-1", [32, 32, 14, 16]],
      ["time-2", [48, 32, 14, 16]],
      ["time-3", [64, 32, 14, 16]],
      ["time-4", [80, 32, 14, 16]],
      ["time-5", [96, 32, 14, 16]],
      ["time-6", [112, 32, 14, 16]],
      ["time-7", [128, 32, 14, 16]],
      ["time-8", [144, 32, 14, 16]],
      ["time-9", [160, 32, 14, 16]],

      // Name tags
      ["tag-ken", [128, 56, 30, 9]],
      ["tag-ryu", [16, 56, 28, 9]],
    ]);
  }

  drawFrame(ctx, frameKey, x, y, direction = 1) {
    const [sourceX, sourceY, sourceWidth, sourceHeight] =
      this.frames.get(frameKey);

    ctx.scale(direction, 1);
    ctx.drawImage(
      this.image,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      x * direction,
      y,
      sourceWidth,
      sourceHeight
    );
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  update(time) {}

  drawHealthBars(ctx) {
    this.drawFrame(ctx, "health-bar", 31, 20);
    this.drawFrame(ctx, "ko-white", 176, 18);
    this.drawFrame(ctx, "health-bar", 353, 20, -1);
  }

  drawNameTags(ctx) {
    const [{ name: name1 }, { name: name2 }] = this.fighters;

    this.drawFrame(ctx, `tag-${name1.toLowerCase()}`, 32, 33);
    this.drawFrame(ctx, `tag-${name2.toLowerCase()}`, 322, 33);
  }

  drawTimer(ctx) {
    const timeString = String(this.time).padStart(2, "00");

    this.drawFrame(ctx, `time-${timeString.charAt(0)}`, 178, 33);
    this.drawFrame(ctx, `time-${timeString.charAt(1)}`, 194, 33);
  }

  draw(ctx) {
    this.drawHealthBars(ctx);
    this.drawNameTags(ctx);
    this.drawTimer(ctx);
  }
}
