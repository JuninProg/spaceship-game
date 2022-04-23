<script setup lang="ts">
import { ref } from 'vue';
import Game from './game/Game.vue';
import { usePlayerStore } from '../stores/player';
import type { ScreenName } from '../@types/screen';

const playerStore = usePlayerStore();

const players = playerStore.players;

const screens = ref<ScreenName>('rank');

function alterScreen(name: ScreenName) {
  screens.value = name;
}
</script>

<template>
  <div v-if="screens === 'rank'" class="rank">
    <div class="rank__title">
      <p class="title">TOP PLAYERS</p>
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
      <button @click="alterScreen('play')">START</button>
      <button @click="alterScreen('instructions')">HOW TO PLAY</button>
    </div>
  </div>
  <div v-else-if="screens === 'instructions'" class="instructions">
    <div class="instructions__title">
      <p class="title">HOW TO PLAY</p>
    </div>
    <div class="instructions__container">
      <ol>
        <li>Defeat as many asteroids as you can.</li>
        <li>If an asteroid collides with the spaceship you lose.</li>
        <li>The controls are:</li>
        <ul>
          <li>Use "W" to shoot.</li>
          <li>Use "D" to move right.</li>
          <li>Use "A" to move left.</li>
        </ul>
      </ol>
    </div>
    <div class="instructions__button">
      <button @click="alterScreen('rank')">BACK</button>
    </div>
  </div>
  <Game v-else-if="screens === 'play'" />
</template>

<style scoped>
p {
  margin: 0;
  width: 100%;
}

.title {
  font-size: 24px;
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
.instructions {
  background-color: black;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.instructions__title {
  height: 10%;
  display: flex;
  align-items: center;
}

.instructions__container {
  height: 70%;
  width: 80%;
  display: flex;
  align-items: center;
  font-size: 20px;
}

.instructions__button {
  height: 20%;
  display: flex;
  align-items: center;
}
</style>
