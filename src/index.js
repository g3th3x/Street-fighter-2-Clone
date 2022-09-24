import { Stage } from "./entities/Stage.js";
import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { FpsCounter } from "./entities/FpsCounter.js";

const gameViewport = {
  gvWidth: 384,
  gvHeight: 224,
};

window.addEventListener("load", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = gameViewport.gvWidth;
  canvas.height = gameViewport.gvHeight;

  const entities = [
    new Stage(),
    new Ken(80, 110, 150),
    new Ryu(80, 110, -150),
    new FpsCounter(),
  ];

  let previousTime = 0;
  let secondPassed = 0;

  function frame(time) {
    window.requestAnimationFrame(frame);

    secondPassed = (time - previousTime) / 1000;
    previousTime = time;

    for (const entity of entities) {
      entity.update(secondPassed, ctx);
    }

    for (const entity of entities) {
      entity.draw(ctx);
    }
  }

  window.requestAnimationFrame(frame);
});
