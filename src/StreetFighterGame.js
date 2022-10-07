import { Stage } from "./entities/Stage.js";
import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import { STAGE_FLOOR } from "./constants/stage.js";
import { FighterDirection } from "./constants/fighters.js";
import {
  registerKeyboardEvents,
  registerGamepadEvents,
  pollGamepads,
} from "./InputHandler.js";
import { Shadow } from "./entities/fighters/Shadow.js";
import { StatusBar } from "./entities/overlays/StatusBar.js";
import { Camera } from "./Camera.js";

export class StreetFighterGame {
  constructor() {
    this.ctx = this.getContext();
    this.fighters = [
      new Ken(280, STAGE_FLOOR, FighterDirection.LEFT, 0),
      new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT, 1),
    ];

    this.fighters[0].opponent = this.fighters[1];
    this.fighters[1].opponent = this.fighters[0];

    this.camera = new Camera(448, 16, this.fighters);

    this.entities = [
      new Stage(),
      ...this.fighters.map((fighter) => new Shadow(fighter)),
      ...this.fighters,
      new FpsCounter(),
      new StatusBar(this.fighters),
    ];

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
    this.camera.update(this.frameTime, this.ctx);

    for (const entity of this.entities) {
      entity.update(this.frameTime, this.ctx, this.camera);
    }
  }

  draw() {
    for (const entity of this.entities) {
      entity.draw(this.ctx, this.camera);
    }
  }

  frame(time) {
    window.requestAnimationFrame(this.frame.bind(this));

    this.frameTime = {
      secondPassed: (time - this.frameTime.previous) / 1000,
      previous: time,
    };

    pollGamepads();
    this.update();
    this.draw();
  }

  start() {
    registerKeyboardEvents();
    registerGamepadEvents();
    window.requestAnimationFrame(this.frame.bind(this));
  }
}
