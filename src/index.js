import { drawBackground } from "./stage.js";
import { drawKen, updateKen } from "./ken.js";
import { drawRyu, updateRyu } from "./ryu.js";

const gameViewport = {
  gvWidth: 384,
  gvHeight: 224,
};

window.onload = function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = gameViewport.gvWidth;
  canvas.height = gameViewport.gvHeight;

  function frame() {
    updateKen(ctx);
    updateRyu(ctx);

    drawBackground(ctx);
    drawKen(ctx);
    drawRyu(ctx);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
};
