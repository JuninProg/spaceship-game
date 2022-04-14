import p5 from 'p5';
import { Asteroid } from './asteroid';
import { IExplosionAnimation } from './load';

export class Explosion {
  private lib: p5;

  public asteroidId: Asteroid['id'];

  public posX: number;
  public posY: number;

  public animation;
  public width: number;
  public height: number;

  constructor(data: {
    lib: p5;
    animation: IExplosionAnimation;
    asteroidId: Asteroid['id'];
    posX: number;
    posY: number;
  }) {
    this.lib = data.lib;

    this.asteroidId = data.asteroidId;

    this.posX = data.posX;
    this.posY = data.posY;

    this.animation = data.animation.default.animation;
    this.width = data.animation.default.width;
    this.height = data.animation.default.height;
  }

  public setup() {
    // @ts-ignore
    this.lib.animation(this.animation, this.posX, this.posY);
  }
}
