export class FpsCounter {
  constructor() {
    this.fps = 0;
  }
  update(secondPassed) {
    this.fps = Math.trunc(1 / secondPassed);
  }
  draw(ctx) {
    ctx.font = "bold 20 px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(`FPS: ${this.fps}`, ctx.canvas.width / 2, 30);
  }
}
