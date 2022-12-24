export const GamepadThumbstick = {
  DEAD_ZONE: "deadZone",
  HORIZONTAL_AXE_ID: "horizontalAxeId",
  VERTICAL_AXE_ID: "verticalAxeId",
};

export const Control = {
  LEFT: "left",
  RIGHT: "right",
  UP: "up",
  DOWN: "down",
  LIGHT_PUNCH: "lightPunch",
  MEDIUM_PUNCH: "mediumPunch",
  HEAVY_PUNCH: "heavyPunch",
  LIGHT_KICK: "lightKick",
  MEDIUM_KICK: "mediumKick",
  HEAVY_KICK: "heavyKick",
};

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
      [Control.LIGHT_PUNCH]: 0,
    },
    keyboard: {
      [Control.LEFT]: "ArrowLeft",
      [Control.RIGHT]: "ArrowRight",
      [Control.UP]: "ArrowUp",
      [Control.DOWN]: "ArrowDown",
      [Control.LIGHT_PUNCH]: "ControlLeft",
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
      [Control.LIGHT_PUNCH]: 0,
    },
    keyboard: {
      [Control.LEFT]: "KeyA",
      [Control.RIGHT]: "KeyD",
      [Control.UP]: "KeyW",
      [Control.DOWN]: "KeyS",
      [Control.LIGHT_PUNCH]: "KeyQ",
    },
  },
];
