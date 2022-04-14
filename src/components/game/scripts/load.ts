import p5 from 'p5';

type AsteroidColors = 'brown' | 'gray';

export type IAsteroidAnimation = {
  [x in AsteroidColors]: {
    animation: any;
    width: number;
    height: number;
  };
};

export interface IExplosionAnimation {
  default: {
    animation: any;
    width: number;
    height: number;
  };
}

export interface IGunshotAnimation {
  missile: {
    animation: any;
    width: number;
    height: number;
  };
}

export interface ISpaceshipAnimation {
  default: {
    animation: any;
    width: number;
    height: number;
  };
}

export interface IAssets {
  asteroidAnimation: IAsteroidAnimation;
  explosionAnimation: IExplosionAnimation;
  gunshotAnimation: IGunshotAnimation;
  spaceshipAnimation: ISpaceshipAnimation;
}

export function loadAssets(lib: p5): IAssets {
  return {
    asteroidAnimation: {
      brown: {
        width: 57,
        height: 47,
        //@ts-ignore
        animation: lib.loadAnimation('/assets/asteroid/brown/1.png'),
      },
      gray: {
        width: 57,
        height: 40,
        //@ts-ignore
        animation: lib.loadAnimation('/assets/asteroid/grey/1.png'),
      },
    },
    explosionAnimation: {
      default: {
        width: 69,
        height: 65,
        //@ts-ignore
        animation: lib.loadAnimation(
          '/assets/explosion/1.png',
          '/assets/explosion/7.png'
        ),
      },
    },
    gunshotAnimation: {
      missile: {
        width: 5,
        height: 26,
        //@ts-ignore
        animation: lib.loadAnimation('/assets/gunshot/missile/1.png'),
      },
    },
    spaceshipAnimation: {
      default: {
        width: 48,
        height: 53,
        // @ts-ignore
        animation: lib.loadAnimation(
          '/assets/spaceship/1.png',
          '/assets/spaceship/2.png'
        ),
      },
    },
  };
}
