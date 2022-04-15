<script setup lang="ts">
import { ref } from 'vue';
import type { IPlayer } from '../@types/player';
import Game from './game/Game.vue';

const players = ref<IPlayer[]>(
  [
    {
      id: 'asdfads',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'aasfasdfads',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'asdfadsafasfas',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'asdfadasfasfs',
      name: 'JFL',
      score: 1,
    },
    {
      id: 'asdfads',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'aasfasdfads',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'asdfadsafasfas',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'asdfadasfasfs',
      name: 'JFL',
      score: 1,
    },
    {
      id: 'asdfads',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'aasfasdfads',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'asdfadsafasfas',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'asdfadasfasfs',
      name: 'JFL',
      score: 1,
    },
    {
      id: 'asdfads',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'aasfasdfads',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'asdfadsafasfas',
      name: 'JFL',
      score: 2342342,
    },
    {
      id: 'asdfads',
      name: 'JFL',
      score: 2342342,
    },
  ].sort((a, b) => {
    if (a.score > b.score) return -1;
    else return 1;
  })
);

let isRunning = ref(false);

function start() {
  isRunning.value = true;
}
</script>

<template>
  <div v-if="!isRunning" class="rank">
    <div class="rank__title">
      <p>TOP PLAYERS</p>
    </div>
    <div class="rank__container">
      <div class="rank__row">
        <p>RANK</p>
        <p>NAME</p>
        <p>SCORE</p>
      </div>
      <br />
      <div class="rank__row" v-for="(player, index) in players" :key="index">
        <p>1</p>
        <p>{{ player.name }}</p>
        <p>{{ player.score }}</p>
      </div>
    </div>
    <div class="rank__buttons">
      <button @click="start">JOGAR</button>
      <button>COMO JOGAR</button>
    </div>
  </div>
  <Game v-else />
</template>

<style scoped>
p {
  margin: 0;
  width: 100%;
}

.rank {
  background-color: black;
  color: antiquewhite;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.rank__title {
  flex: 2 2 auto;
  display: flex;
  align-items: center;
  font-size: 24px;
}

.rank__buttons {
  flex: 3 3 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;
}

button {
  font-size: 20px;
  width: 100px;
  background-color: antiquewhite;
  border: none;
}

button:hover {
  cursor: pointer;
}

.rank__container {
  width: 80%;
  flex: 4 4 auto;
}

.rank__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  text-align: center;
}
</style>
