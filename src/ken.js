const ken = document.querySelector('img[alt="ken"]');

const position = {
  x: 80,
  y: 110,
};

let velocity = 2;

export function updateKen(ctx) {
  position.x += velocity;

  if (position.x < 0 || position.x > ctx.canvas.width - ken.width) {
    velocity = -velocity;
  }
}

export function drawKen(ctx) {
  ctx.drawImage(ken, position.x, position.y);
}
