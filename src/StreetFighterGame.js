import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { KenStage } from "./entities/stage/KenStage.js";
import { FpsCounter } from "./entities/overlays/FpsCounter.js";
import { STAGE_MID_POINT, STAGE_PADDING } from "./constants/stage.js";
import {
  registerKeyboardEvents,
  registerGamepadEvents,
  pollGamepads,
} from "./engine/InputHandler.js";
import { Shadow } from "./entities/fighters/Shadow.js";
import { StatusBar } from "./entities/overlays/StatusBar.js";
import { Camera } from "./engine/Camera.js";
import { getContext } from "./utils/context.js";

export class StreetFighterGame {
  ctx = getContext();
  fighters = [new Ken(0), new Ryu(1)];
  camera = new Camera(
    STAGE_MID_POINT + STAGE_PADDING - this.ctx.canvas.width / 2,
    16,
    this.fighters
  );

  frameTime = {
    previous: 0,
    secondPassed: 0,
  };

  constructor() {
    this.stage = new KenStage();

    this.fighters[0].opponent = this.fighters[1];
    this.fighters[1].opponent = this.fighters[0];

    this.entities = [
      ...this.fighters.map((fighter) => new Shadow(fighter)),
      ...this.fighters,
    ];

    this.overlays = [new FpsCounter(), new StatusBar(this.fighters)];
  }

  update() {
    this.camera.update(this.frameTime, this.ctx);
    this.stage.update(this.frameTime, this.ctx);

    for (const entity of this.entities) {
      entity.update(this.frameTime, this.ctx, this.camera);
    }

    for (const overlay of this.overlays) {
      overlay.update(this.frameTime, this.ctx, this.camera);
    }
  }

  draw() {
    this.stage.drawBackground(this.ctx, this.camera);
    for (const entity of this.entities) {
      entity.draw(this.ctx, this.camera);
    }

    this.stage.drawForeground(this.ctx, this.camera);
    for (const overlay of this.overlays) {
      overlay.draw(this.ctx, this.camera);
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
