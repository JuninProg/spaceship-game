<script setup lang="ts">
import { ref } from 'vue';
import Game from './game/Game.vue';
import { usePlayerStore } from '../stores/player';

const playerStore = usePlayerStore();

const players = playerStore.players;

playerStore.addPlayer({
  name: 'JFL',
  score: 123,
});
playerStore.addPlayer({
  name: 'TEST',
  score: 134123,
});
playerStore.addPlayer({
  name: 'JFL',
  score: 123,
});
playerStore.addPlayer({
  name: 'TEST',
  score: 134123,
});
playerStore.addPlayer({
  name: 'JFL',
  score: 123,
});
playerStore.addPlayer({
  name: 'TEST',
  score: 134123,
});
playerStore.addPlayer({
  name: 'JFL',
  score: 123,
});
playerStore.addPlayer({
  name: 'TEST',
  score: 134123,
});
playerStore.addPlayer({
  name: 'JFL',
  score: 123,
});
playerStore.addPlayer({
  name: 'TEST',
  score: 134123,
});
playerStore.addPlayer({
  name: 'JFL',
  score: 123,
});
playerStore.addPlayer({
  name: 'TEST',
  score: 134123,
});
playerStore.addPlayer({
  name: 'TEST',
  score: 134123,
});
playerStore.addPlayer({
  name: 'JFL',
  score: 123,
});
playerStore.addPlayer({
  name: 'TEST',
  score: 134123,
});

playerStore.addPlayer({
  name: 'TEST',
  score: 134123,
});
playerStore.addPlayer({
  name: 'JFL',
  score: 123,
});

const screens = ref<'rank' | 'how_to_play' | 'before_play' | 'play'>('rank');

function start() {
  screens.value = 'play';
}
</script>

<template>
  <div v-if="screens === 'rank'" class="rank">
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
      <div
        class="rank__row"
        v-for="(player, index) in players"
        :key="player.id"
      >
        <p>{{ index + 1 }}</p>
        <p>{{ player.name }}</p>
        <p>{{ player.score }}</p>
      </div>
    </div>
    <div class="rank__buttons">
      <button @click="start">JOGAR</button>
      <button>COMO JOGAR</button>
    </div>
  </div>
  <Game v-else-if="screens === 'play'" />
</template>

<style scoped>
p {
  margin: 0;
  width: 100%;
}

.rank {
  background-color: black;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.rank__title {
  height: 10%;
  display: flex;
  align-items: center;
  font-size: 24px;
}

.rank__buttons {
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;
}

button {
  font-size: 20px;
  width: 100px;
  background-color: white;
  border: none;
}

button:hover {
  cursor: pointer;
  background-color: aliceblue;
}

.rank__container {
  width: 80%;
  height: 70%;
}

.rank__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  text-align: center;
}
</style>
