<script setup lang="ts">
import Logo from './Logo.vue';
</script>

<template>
  <nav>
    <Logo />
    <p class="nav__title"><a href="">Spaceship Game</a></p>
    <p class="nav__column"><a href="">Contact</a></p>
    <p class="nav__column"><a href="">Login</a></p>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: white;
  margin: 3vh 0;
}

a:hover {
  color: aliceblue;
}

nav {
  margin: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: black;
  align-items: center;
}

.nav__title {
  flex: 4 1 auto;
}

.nav__column {
  flex: 0.15 0.15 auto;
}
</style>
