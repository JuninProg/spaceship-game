import p5 from 'p5';
import * as uuid from 'uuid';
import { INTERFACE_WIDTH } from '../../../constants/game';
import { Spaceship } from '../scripts/spaceship';
import { IAsteroidAnimation } from '../scripts/load';

export class Asteroid {
  private lib: p5;

  public id: string;

  public location: p5.Vector;
  public acceleration: p5.Vector;
  public velocity: p5.Vector;

  public animation;
  public width: number;
  public height: number;

  public hited: boolean = false;

  constructor(data: { lib: p5; animation: IAsteroidAnimation }) {
    this.lib = data.lib;

    this.id = uuid.v4();

    const keys = Object.keys(data.animation);
    const randomKey = keys[
      Math.floor(Math.random() * keys.length)
    ] as keyof IAsteroidAnimation;
    const animation = data.animation[randomKey];

    this.animation = animation.animation;
    this.width = animation.width;
    this.height = animation.height;

    const posX = INTERFACE_WIDTH / 2;
    const posY = this.lib.height + this.height / 2;

    this.location = this.lib.createVector(posX, posY);
    this.acceleration = this.lib.createVector(0, 0);
    this.velocity = this.lib.createVector(0, 0);
  }

  public setup() {
    this.draw();
    this.update();
    this.borders();
  }

  private draw() {
    //@ts-ignore
    this.lib.animation(this.animation, this.location.x, this.location.y);
  }

  private borders() {
    if (this.location.x >= INTERFACE_WIDTH + this.width) this.location.x = 0;
    if (this.location.x <= -this.width) this.location.x = INTERFACE_WIDTH;
  }

  private update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  public applyForce(force: p5.Vector) {
    this.acceleration.add(force);
  }

  public hits(spaceship: Spaceship) {
    return (
      this.location.y - this.height / 2 <=
        spaceship.location.y + spaceship.height / 2 &&
      this.location.y + this.height / 2 >=
        spaceship.location.y - spaceship.height / 2 &&
      this.location.x >= spaceship.location.x - spaceship.width / 2 &&
      this.location.x <= spaceship.location.x + spaceship.width / 2
    );
  }
}
