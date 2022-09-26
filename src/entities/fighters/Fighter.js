import { FighterState } from "../../constants/fighters.js";

export class Fighter {
  constructor(name, x, y, direction) {
    this.name = name;
    this.position = { x, y };
    this.velocity = { x: 0, y: 0 };
    this.initialVelocity = {};
    this.direction = direction;
    this.gravity = 0;

    this.frames = new Map();
    this.animationFrame = 0;
    this.animationTimer = 0;
    this.animations = {};

    this.image = new Image();

    this.states = {
      [FighterState.IDLE]: {
        init: this.handleWalkIdleInit.bind(this),
        update: this.handleWalkIdleState.bind(this),
      },
      [FighterState.WALK_FORWARD]: {
        init: this.handleWalkForwardInit.bind(this),
        update: this.handleWalkForwardState.bind(this),
      },
      [FighterState.WALK_BACKWARD]: {
        init: this.handleWalkBackwardInit.bind(this),
        update: this.handleWalkBackwardState.bind(this),
      },
      [FighterState.JUMP_UP]: {
        init: this.handleJumpUpInit.bind(this),
        update: this.handleJumpUpState.bind(this),
      },
    };

    this.changeState(FighterState.IDLE);
  }

  changeState(newState) {
    this.currentState = newState;
    this.animationFrame = 0;

    this.states[this.currentState].init();
  }

  handleWalkIdleInit() {
    this.velocity.x = 0;
  }

  handleWalkIdleState() {}

  handleWalkForwardInit() {
    this.velocity.x = 150 * this.direction;
  }

  handleWalkForwardState() {}

  handleWalkBackwardInit() {
    this.velocity.x = -150 * this.direction;
  }

  handleWalkBackwardState() {}

  handleJumpUpInit() {
    this.velocity.y = this.initialVelocity.jump;
  }

  handleJumpUpState() {}

  // Ограничения
  updateStageContraints(ctx) {
    const WIDTH = 32;

    if (this.position.x > ctx.canvas.width - WIDTH) {
      this.position.x = ctx.canvas.width - WIDTH;
    }

    if (this.position.x < WIDTH) {
      this.position.x = WIDTH;
    }
  }

  updateAnimation(time) {
    const animation = this.animations[this.currentState];
    const [, frameDelay] = animation[this.animationFrame];

    if (time.previous > this.animationTimer + frameDelay) {
      this.animationTimer = time.previous;

      if (frameDelay > 0) {
        this.animationFrame++;
      }
      if (this.animationFrame > animation.length) {
        this.animationFrame = 0;
      }
    }

    // if (time.previous > this.animationTimer + 60) {
    //   this.animationTimer = time.previous;

    //   this.animationFrame++;
    //   if (this.animationFrame > this.animations[this.currentState].length) {
    //     this.animationFrame = 0;
    //   }
    // }
  }

  update(time, ctx) {
    this.position.x += this.velocity.x * time.secondPassed;
    this.position.y += this.velocity.y * time.secondPassed;

    this.states[this.currentState].update(time, ctx);
    this.updateAnimation(time);
    this.updateStageContraints(ctx);
  }

  drawDebug(ctx) {
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.moveTo(Math.floor(this.position.x) - 4.5, Math.floor(this.position.y));
    ctx.lineTo(Math.floor(this.position.x) + 4.5, Math.floor(this.position.y));
    ctx.moveTo(Math.floor(this.position.x), Math.floor(this.position.y) - 4.5);
    ctx.lineTo(Math.floor(this.position.x), Math.floor(this.position.y) + 4.5);
    ctx.stroke();
  }

  draw(ctx) {
    const [[x, y, width, height], [originX, originY]] = this.frames.get(
      this.animations[this.currentState][this.animationFrame]
    );

    ctx.scale(this.direction, 1);
    ctx.drawImage(
      this.image,
      x,
      y,
      width,
      height,
      Math.floor(this.position.x * this.direction) - originX,
      Math.floor(this.position.y) - originY,
      width,
      height
    );
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    this.drawDebug(ctx);
  }
}
