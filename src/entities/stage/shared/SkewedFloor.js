export class SkewedFloor {
  constructor(image, dimensions) {
    this.image = image;
    this.dimensions = dimensions;
  }

  draw(ctx, camera, y) {
    const [sourceX, sourceY, sourceWidth, sourceHeight] = this.dimensions;

    ctx.save();
    ctx.setTransform(
      1,
      0,
      0,
      1,
      Math.floor(192 - camera.position.x),
      y - camera.position.y
    );
    ctx.drawImage(
      this.image,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      0,
      0,
      sourceWidth,
      sourceHeight
    );
    ctx.restore();
  }
}
