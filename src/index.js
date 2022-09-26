import { Stage } from "./entities/Stage.js";
import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import { STAGE_FLOOR } from "./constants/stage.js";
import { FighterDirection, FighterState } from "./constants/fighters.js";

function populateMoveDropdown() {
  const dropdown = document.getElementById("state-dropdown");

  Object.entries(FighterState).forEach(([, value]) => {
    const option = document.createElement("option");
    option.setAttribute("value", value);
    option.innerText = value;
    dropdown.appendChild(option);
  });
}

window.addEventListener("load", () => {
  populateMoveDropdown();

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  const entities = [
    new Stage(),
    new Ken(280, STAGE_FLOOR, FighterDirection.LEFT),
    new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT),
    new FpsCounter(),
  ];

  let frameTime = {
    previous: 0,
    secondPassed: 0,
  };

  function frame(time) {
    window.requestAnimationFrame(frame);

    frameTime = {
      secondPassed: (time - frameTime.previous) / 1000,
      previous: time,
    };

    for (const entity of entities) {
      entity.update(frameTime, ctx);
    }

    for (const entity of entities) {
      entity.draw(ctx);
    }
  }

  window.requestAnimationFrame(frame);
});
