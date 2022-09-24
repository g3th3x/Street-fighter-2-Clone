const background = document.querySelector('img[alt="background"]');

export function drawBackground(ctx) {
  ctx.drawImage(background, 0, 0);
}
