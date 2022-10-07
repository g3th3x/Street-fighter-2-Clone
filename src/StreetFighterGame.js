import { Stage } from "./entities/Stage.js";
import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { FpsCounter } from "./entities/FpsCounter.js";
import {
  STAGE_FLOOR,
  STAGE_MID_POINT,
  STAGE_PADDING,
} from "./constants/stage.js";
import {
  FighterDirection,
  FIGHTER_START_DISTANCE,
} from "./constants/fighters.js";
import {
  registerKeyboardEvents,
  registerGamepadEvents,
  pollGamepads,
} from "./InputHandler.js";
import { Shadow } from "./entities/fighters/Shadow.js";
import { StatusBar } from "./entities/overlays/StatusBar.js";
import { Camera } from "./Camera.js";
import { getContext } from "./utils/context.js";

export class StreetFighterGame {
  constructor() {
    this.ctx = getContext();
    this.fighters = [new Ken(0), new Ryu(1)];

    this.fighters[0].opponent = this.fighters[1];
    this.fighters[1].opponent = this.fighters[0];

    this.camera = new Camera(
      STAGE_MID_POINT + STAGE_PADDING - this.ctx.canvas.width / 2,
      16,
      this.fighters
    );

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
