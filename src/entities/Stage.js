export class Stage {
  constructor() {
    this.image = document.querySelector('img[alt="background"]');
  }
  draw(ctx) {
    ctx.drawImage(this.image, 0, 0);
  }
}
