import { Stage } from "./entities/Stage.js";
import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";

const gameViewport = {
  gvWidth: 384,
  gvHeight: 224,
};

window.onload = function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = gameViewport.gvWidth;
  canvas.height = gameViewport.gvHeight;

  const ken = new Ken(80, 110, 2);
  const ryu = new Ryu(80, 110, 1);
  const stage = new Stage();

  function frame() {
    ken.update(ctx);
    ryu.update(ctx);

    stage.draw(ctx);
    ken.draw(ctx);
    ryu.draw(ctx);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
};
