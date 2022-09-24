const gameViewport = {
  gvWidth: 384,
  gvHeight: 224,
};

window.onload = function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = gameViewport.gvWidth;
  canvas.height = gameViewport.gvHeight;

  const [ken, background] = document.querySelectorAll("img");

  const position = {
    x: gameViewport.gvWidth / 2 - ken.width / 2,
    y: 110,
  };

  let velocity = 2;

  function frame() {
    position.x += velocity;

    if (position.x < 0 || position.x > gameViewport.gvWidth - ken.width) {
      velocity = -velocity;
    }

    // ctx.clearRect(0, 0, gameViewport.gvWidth, gameViewport.gvHeight);
    ctx.drawImage(background, 0, 0);

    // ctx.strokeStyle = "yellow";
    // ctx.moveTo(0, 0);
    // ctx.lineTo(gameViewport.gvWidth, gameViewport.gvHeight);
    // ctx.moveTo(gameViewport.gvWidth, 0);
    // ctx.lineTo(0, gameViewport.gvHeight);
    // ctx.stroke();

    ctx.drawImage(ken, position.x, position.y);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);

  //   console.log(ctx);
};
