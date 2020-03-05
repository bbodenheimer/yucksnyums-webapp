<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  background-image: url('./assets/food.svg'), url('./assets/chalkboard-black.jpg');
  background-size: 50%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  display: inline-block;
  background-color: rgba(0,0,0,0.3);
}

h1, h2, h3, h4, h5, p {
  margin: 0;
}
</style>
