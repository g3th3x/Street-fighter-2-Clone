import { Stage } from "./entities/Stage.js";
import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import { STAGE_FLOOR } from "./constants/stage.js";
import { FighterDirection } from "./constants/fighters.js";
import { registerKeyboardEvents } from "./InputHandler.js";

export class StreetFighterGame {
  constructor() {
    this.ctx = this.getContext();
    this.fighters = [
      new Ken(280, STAGE_FLOOR, FighterDirection.LEFT),
      new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT),
    ];

    this.entities = [new Stage(), ...this.fighters, new FpsCounter()];

    this.frameTime = {
      previous: 0,
      secondPassed: 0,
    };
  }

  getContext() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    ctx.imageSmoothingEnabled = false;

    return ctx;
  }

  update() {
    for (const entity of this.entities) {
      entity.update(this.frameTime, this.ctx);
    }
  }

  draw() {
    for (const entity of this.entities) {
      entity.draw(this.ctx);
    }
  }

  frame(time) {
    window.requestAnimationFrame(this.frame.bind(this));

    this.frameTime = {
      secondPassed: (time - this.frameTime.previous) / 1000,
      previous: time,
    };

    this.update();
    this.draw();
  }

  start() {
    registerKeyboardEvents();
    window.requestAnimationFrame(this.frame.bind(this));
  }
}
