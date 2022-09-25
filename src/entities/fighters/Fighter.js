export class Fighter {
  constructor(name, x, y, velocity) {
    this.name = name;
    this.image = new Image();
    this.frames = new Map();
    this.position = { x, y };
    this.velocity = velocity;
    this.animationFrame = "forwards-1";
  }
  update(secondPassed, ctx) {
    const [, , width] = this.frames.get(this.animationFrame);
    this.position.x += this.velocity * secondPassed;

    if (this.position.x < 0 || this.position.x > ctx.canvas.width - width) {
      this.velocity = -this.velocity;
    }
  }
  draw(ctx) {
    const [x, y, width, height] = this.frames.get(this.animationFrame);

    ctx.drawImage(
      this.image,
      x,
      y,
      width,
      height,
      this.position.x,
      this.position.y,
      width,
      height
    );
  }
}
