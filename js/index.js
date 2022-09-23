const gameViewport = {
  gvWidth: 384,
  gvHeight: 224,
  gvScale: 2,
};

window.onload = function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = gameViewport.gvWidth;
  canvas.height = gameViewport.gvHeight;

  canvas.style.width = `${gameViewport.gvWidth * gameViewport.gvScale}px`;
  canvas.style.height = `${gameViewport.gvHeight * gameViewport.gvScale}px`;

  ctx.strokeStyle = "yellow";
  ctx.moveTo(0, 0);
  ctx.lineTo(gameViewport.gvWidth, gameViewport.gvHeight);
  ctx.moveTo(gameViewport.gvWidth, 0);
  ctx.lineTo(0, gameViewport.gvHeight);
  ctx.stroke();

  console.log(ctx);
};
