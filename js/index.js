const gameViewport = {
  gvWidth: 384,
  gvHeight: 224,
};

window.onload = function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = gameViewport.gvWidth;
  canvas.height = gameViewport.gvHeight;

  const ken = document.querySelector("img");

  function frame() {
    ctx.strokeStyle = "yellow";
    ctx.moveTo(0, 0);
    ctx.lineTo(gameViewport.gvWidth, gameViewport.gvHeight);
    ctx.moveTo(gameViewport.gvWidth, 0);
    ctx.lineTo(0, gameViewport.gvHeight);
    ctx.stroke();

    ctx.drawImage(ken, 0, 0);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);

  console.log(ctx);
};
