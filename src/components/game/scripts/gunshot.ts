import p5 from 'p5';
import { Asteroid } from './asteroid';
import { IGunshotAnimation } from './load';

export class Gunshot {
  public lib: p5;

  public location: p5.Vector;
  public acceleration: p5.Vector;
  public velocity: p5.Vector;

  public animation;
  public width: number;
  public height: number;

  constructor(data: {
    lib: p5;
    animation: IGunshotAnimation;
    posX: number;
    posY: number;
  }) {
    this.lib = data.lib;

    this.location = this.lib.createVector(data.posX, data.posY);
    this.acceleration = this.lib.createVector(0, 0);
    this.velocity = this.lib.createVector(0, 0);

    this.animation = data.animation.missile.animation;
    this.width = data.animation.missile.width;
    this.height = data.animation.missile.height;
  }

  public setup() {
    this.draw();
    this.update();
  }

  private draw() {
    //@ts-ignore
    this.lib.animation(this.animation, this.location.x, this.location.y);
  }

  private update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  public applyForce(force: p5.Vector) {
    this.acceleration.add(force);
  }

  public hits(asteroid: Asteroid): boolean {
    return (
      this.location.y - this.height / 2 <=
        asteroid.location.y + asteroid.height / 2 &&
      this.location.y + this.height / 2 >=
        asteroid.location.y - asteroid.height / 2 &&
      this.location.x >= asteroid.location.x - asteroid.width / 2 &&
      this.location.x <= asteroid.location.x + asteroid.width / 2
    );
  }
}
