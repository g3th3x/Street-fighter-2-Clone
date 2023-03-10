import { GamepadThumbstick, Control } from "../constants/control.js";

export const controls = [
  {
    gamePad: {
      [GamepadThumbstick.DEAD_ZONE]: 0.5,
      [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,
      [GamepadThumbstick.VERTICAL_AXE_ID]: 1,

      [Control.LEFT]: 14,
      [Control.RIGHT]: 15,
      [Control.UP]: 12,
      [Control.DOWN]: 13,
      [Control.LIGHT_PUNCH]: 2,
      [Control.MEDIUM_PUNCH]: 3,
      [Control.HEAVY_PUNCH]: 5,
      [Control.LIGHT_KICK]: 0,
      [Control.MEDIUM_KICK]: 1,
      [Control.HEAVY_KICK]: 4,
    },
    keyboard: {
      [Control.LEFT]: "KeyA",
      [Control.RIGHT]: "KeyD",
      [Control.UP]: "KeyW",
      [Control.DOWN]: "KeyS",
      [Control.LIGHT_PUNCH]: "KeyR",
      [Control.MEDIUM_PUNCH]: "KeyT",
      [Control.HEAVY_PUNCH]: "KeyY",
      [Control.LIGHT_KICK]: "KeyF",
      [Control.MEDIUM_KICK]: "KeyG",
      [Control.HEAVY_KICK]: "KeyH",
    },
  },
  {
    gamePad: {
      [GamepadThumbstick.DEAD_ZONE]: 0.5,
      [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,
      [GamepadThumbstick.VERTICAL_AXE_ID]: 1,

      [Control.LEFT]: 14,
      [Control.RIGHT]: 15,
      [Control.UP]: 12,
      [Control.DOWN]: 13,
      [Control.LIGHT_PUNCH]: 2,
      [Control.MEDIUM_PUNCH]: 3,
      [Control.HEAVY_PUNCH]: 5,
      [Control.LIGHT_KICK]: 0,
      [Control.MEDIUM_KICK]: 1,
      [Control.HEAVY_KICK]: 4,
    },
    keyboard: {
      [Control.LEFT]: "ArrowLeft",
      [Control.RIGHT]: "ArrowRight",
      [Control.UP]: "ArrowUp",
      [Control.DOWN]: "ArrowDown",
      [Control.LIGHT_PUNCH]: "KeyJ",
      [Control.MEDIUM_PUNCH]: "KeyK",
      [Control.HEAVY_PUNCH]: "KeyL",
      [Control.LIGHT_KICK]: "KeyN",
      [Control.MEDIUM_KICK]: "KeyM",
      [Control.HEAVY_KICK]: "Comma",
    },
  },
];
