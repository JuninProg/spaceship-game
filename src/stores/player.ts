import { defineStore } from 'pinia';
import { IPlayer } from '../@types/player';
import { v4 as uuid } from 'uuid';

export const usePlayerStore = defineStore('player', () => {
  const players: IPlayer[] = [];

  function addPlayer(data: Omit<IPlayer, 'id' | 'position'>) {
    const id = uuid();
    const newPlayer: IPlayer = {
      id,
      name: data.name,
      score: data.score,
    };
    players.push(newPlayer);
    players.sort((a, b) => {
      if (a.score > b.score) return -1;
      else return 1;
    });
  }

  return { players, addPlayer };
});
