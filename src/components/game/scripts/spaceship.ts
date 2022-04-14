import p5 from 'p5';
import { Gunshot } from './gunshot';
import { INTERFACE_WIDTH, INTERFACE_HEIGHT } from '../../../constants/game';
import { IGunshotAnimation, ISpaceshipAnimation } from './load';

export class Spaceship {
  public lib: p5;

  public location: p5.Vector;
  public acceleration: p5.Vector;
  public velocity: p5.Vector;

  public animation;
  public width: number;
  public height: number;

  public gunshotAnimation: IGunshotAnimation;

  constructor(data: {
    lib: p5;
    spaceshipAnimation: ISpaceshipAnimation;
    gunshotAnimation: IGunshotAnimation;
  }) {
    this.lib = data.lib;

    this.height = data.spaceshipAnimation.default.height;
    this.width = data.spaceshipAnimation.default.width;

    const posX = INTERFACE_WIDTH / 2;
    const posY = INTERFACE_HEIGHT - this.height / 2;

    this.location = this.lib.createVector(posX, posY);
    this.acceleration = this.lib.createVector(0, 0);
    this.velocity = this.lib.createVector(0, 0);

    this.animation = data.spaceshipAnimation.default.animation;
    this.gunshotAnimation = data.gunshotAnimation;
  }

  public setup(gunshots: Gunshot[]) {
    this.initAnimation();

    this.borders();
    this.update();
    this.slowMovement();

    this.movement({
      left: this.lib.LEFT_ARROW,
      right: this.lib.RIGHT_ARROW,
    });
    this.fireGunshot(this.lib.UP_ARROW, gunshots);
  }

  private borders() {
    if (this.location.x >= INTERFACE_WIDTH + this.width) this.location.x = 0;
    if (this.location.x <= -this.width) this.location.x = INTERFACE_WIDTH;
  }

  private initAnimation() {
    //@ts-ignore
    this.lib.animation(this.animation, this.location.x, this.location.y);
  }

  private movement(data: { left: number; right: number }) {
    if (this.lib.keyIsDown(data.right)) {
      this.applyForce(this.lib.createVector(0.1, 0));
    }
    if (this.lib.keyIsDown(data.left)) {
      this.applyForce(this.lib.createVector(-0.1, 0));
    }
  }

  private update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  private slowMovement() {
    const velocityCopy = this.velocity.copy();
    velocityCopy.normalize();
    const scalar = -0.02;
    velocityCopy.mult(scalar);
    this.applyForce(velocityCopy);
  }

  public applyForce(force: p5.Vector) {
    this.acceleration.add(force);
  }

  private fireGunshot(keyCode: number, gunshots: Gunshot[]) {
    this.lib.keyPressed = () => {
      if (this.lib.keyCode === keyCode) {
        const gunshot = new Gunshot({
          lib: this.lib,
          animation: this.gunshotAnimation,
          posX: this.location.x,
          posY: this.location.y - this.height / 2,
        });
        // gunshot in top of spaceship
        gunshot.location.y = gunshot.location.y - gunshot.height / 2;
        gunshot.acceleration.add(this.lib.createVector(0, -6.5));
        gunshots.push(gunshot);
      }
    };
  }
}
