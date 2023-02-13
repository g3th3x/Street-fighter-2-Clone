import {
  registerKeyboardEvents,
  registerGamepadEvents,
  pollGamepads,
} from "./engine/InputHandler.js";
import { getContext } from "./utils/context.js";
import { BattleScene } from "./scenes/BattleScene.js";

export class StreetFighterGame {
  ctx = getContext();

  frameTime = {
    previous: 0,
    secondPassed: 0,
  };

  constructor() {
    this.scene = new BattleScene();
  }

  frame(time) {
    window.requestAnimationFrame(this.frame.bind(this));

    this.frameTime = {
      secondPassed: (time - this.frameTime.previous) / 1000,
      previous: time,
    };

    pollGamepads();
    this.scene.update(this.frameTime, this.ctx);
    this.scene.draw(this.ctx);
  }

  start() {
    registerKeyboardEvents();
    registerGamepadEvents();
    window.requestAnimationFrame(this.frame.bind(this));
  }
}
