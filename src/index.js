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

function handleFormSubmit(event, fighters) {
  event.preventDefault();

  const selectedCheckBoxes = Array.from(
    event.target.querySelectorAll("input:checked")
  ).map((checkbox) => checkbox.value);

  const option = event.target.querySelector("select");

  fighters.forEach((fighter) => {
    if (selectedCheckBoxes.includes(fighter.name)) {
      fighter.changeState(option.value);
    }
  });
}

window.addEventListener("load", () => {
  populateMoveDropdown();

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  ctx.imageSmoothingEnabled = false;

  const fighters = [
    new Ken(280, STAGE_FLOOR, FighterDirection.LEFT),
    new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT),
  ];

  const entities = [new Stage(), ...fighters, new FpsCounter()];

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

  document.addEventListener("submit", (event) =>
    handleFormSubmit(event, fighters)
  );

  window.requestAnimationFrame(frame);
});
