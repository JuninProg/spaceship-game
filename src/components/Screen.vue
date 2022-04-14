<script setup lang="ts">
import { ref } from 'vue';
import type { IPlayer } from '../@types/player';

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
  ].sort((a, b) => {
    if (a.score > b.score) return -1;
    else return 1;
  })
);
</script>

<template>
  <div class="screen">
    <div class="rank">
      <h2>TOP PLAYERS</h2>
      <div
        class="rank__row"
        v-for="(player, index) in players"
        :key="player.id"
      >
        <p>{{ index }}</p>
        <p>{{ player.name }}</p>
        <p>{{ player.score }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.screen {
  color: antiquewhite;
  border: 2px solid red;
  width: 800px;
  height: 570px;
}

.rank {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: black;
  height: 100%;
}

.rank__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}

.rank__row p {
  /* flex: 1 1 auto; */
}
</style>
