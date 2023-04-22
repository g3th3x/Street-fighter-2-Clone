import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/game.js";

export function getContext() {
  const cvs = document.querySelector("canvas");
  const ctx = cvs.getContext("2d");

  ctx.imageSmoothingEnabled = false;
  ctx.canvas.width = SCREEN_WIDTH;
  ctx.canvas.height = SCREEN_HEIGHT;

  return ctx;
}

export function drawFrame(ctx, image, dimensions, x, y, direction = 1) {
  const [sourceX, sourceY, sourceWidth, sourceHeight] = dimensions;

  ctx.scale(direction, 1);
  ctx.drawImage(
    image,
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
