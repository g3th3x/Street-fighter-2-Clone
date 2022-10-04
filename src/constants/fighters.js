export const FighterDirection = {
  RIGHT: 1,
  LEFT: -1,
};

export const FighterState = {
  IDLE: "idle",
  WALK_FORWARD: "walkForwards",
  WALK_BACKWARD: "walkBackwards",
  JUMP_START: "jumpStart",
  JUMP_UP: "jumpUp",
  JUMP_FORWARD: "jumpForwards",
  JUMP_BACKWARD: "jumpBackwards",
  JUMP_LAND: "jumpLand",
  CROUCH: "crouch",
  CROUCH_DOWN: "crouchDown",
  CROUCH_UP: "crouchUp",
  IDLE_TURN: "idleTurn",
  CROUCH_TURN: "crouchTurn",
};

export const PushBox = {
  IDLE: [-16, -80, 32, 78],
  JUMP: [-16, -91, 32, 66],
  BEND: [-16, 58, 32, 58],
  CROUCH: [-16, -50, 32, 50],
};
