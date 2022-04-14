<template>
  <nav>
    <a href="" class="nav__title">Spaceship Game</a>
    <a href="" class="nav__column">Contato</a>
    <a href="" class="nav__column">Entrar</a>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: antiquewhite;
  margin: 3vh 0;
}

nav {
  margin: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: black;
}

.nav__title {
  flex: 4 1 auto;
  padding-left: 8vw;
}

.nav__column {
  flex: 0.15 0.15 auto;
}
</style>
