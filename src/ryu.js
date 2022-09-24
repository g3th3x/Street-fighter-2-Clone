const ryu = document.querySelector('img[alt="ryu"]');

const position = {
  x: 80,
  y: 110,
};

let velocity = -1;

export function updateRyu(ctx) {
  position.x += velocity;

  if (position.x < 0 || position.x > ctx.canvas.width - ryu.width) {
    velocity = -velocity;
  }
}

export function drawRyu(ctx) {
  ctx.drawImage(ryu, position.x, position.y);
}
