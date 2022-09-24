export class Stage {
  constructor() {
    this.image = document.querySelector('img[alt="background"]');
  }
  update() {}
  draw(ctx) {
    ctx.drawImage(this.image, 0, 0);
  }
}
