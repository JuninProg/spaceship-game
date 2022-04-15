<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Screen from './components/Screen.vue';
</script>

<template>
  <Navbar />
  <main>
    <Screen class="screen" />
  </main>
  <Footer></Footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

body {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  background: url('/universe.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.screen {
  width: 800px;
  height: 570px;
}
</style>
