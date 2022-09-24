export class Fighter {
  constructor(name, x, y, velocity) {
    this.name = name;
    this.image = new Image();
    this.position = { x, y };
    this.velocity = velocity;
  }
  update(secondPassed, ctx) {
    this.position.x += this.velocity * secondPassed;

    if (
      this.position.x < 0 ||
      this.position.x > ctx.canvas.width - this.image.width
    ) {
      this.velocity = -this.velocity;
    }
  }
  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}
