import p5Type from 'p5';
import { INTERFACE_HEIGHT, INTERFACE_WIDTH } from '../../../constants/game';
import { Asteroid } from './asteroid';
import { Explosion } from './explosion';
import { Gunshot } from './gunshot';
import { IAssets, loadAssets } from './load';
import { Spaceship } from './spaceship';

let spaceship: Spaceship;
const asteroids: Asteroid[] = [];
const gunshots: Gunshot[] = [];
const explosions: Explosion[] = [];
let assets: IAssets;

export const game = (lib: p5Type) => {
  lib.preload = () => {
    assets = loadAssets(lib);

    spaceship = new Spaceship({
      lib,
      gunshotAnimation: assets.gunshotAnimation,
      spaceshipAnimation: assets.spaceshipAnimation,
    });

    for (let i = 0; i < 10; i++) {
      asteroids.push(
        new Asteroid({
          animation: assets.asteroidAnimation,
          lib,
        })
      );
      asteroids[i].applyForce(
        lib.createVector(
          Math.random() * Math.random() < 0.5 ? -1 : 1,
          Math.random()
        )
      );
    }
  };

  lib.setup = () => {
    lib.createCanvas(INTERFACE_WIDTH, INTERFACE_HEIGHT);
  };

  lib.draw = () => {
    lib.background(0);

    for (const asteroid of asteroids) {
      asteroid.setup();

      if (asteroid.hits(spaceship)) {
        lib.noLoop();
      }

      if (asteroid.hited) {
        asteroids.splice(asteroids.indexOf(asteroid), 1);

        const explosion = new Explosion({
          lib,
          animation: assets.explosionAnimation,
          asteroidId: asteroid.id,
          posX: asteroid.location.x,
          posY: asteroid.location.y,
        });
        explosions.push(explosion) - 1;

        setTimeout(() => {
          for (let i = 0; i < explosions.length; i++) {
            if (explosions[i].asteroidId === asteroid.id) {
              explosions.splice(i, 1);
            }
          }
        }, 425);
      }
    }

    for (const explosion of explosions) {
      explosion.setup();
    }

    spaceship.setup(gunshots);

    for (const gunshot of gunshots) {
      gunshot.setup();

      for (const asteroid of asteroids) {
        if (gunshot.hits(asteroid)) {
          gunshots.splice(gunshots.indexOf(gunshot), 1);
          asteroid.hited = true;
        }
      }
    }
  };
};
