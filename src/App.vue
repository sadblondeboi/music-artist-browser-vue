<template>
  <div id="app">
    <Header/>
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Home,
    Header
  }
}
</script>

<style>

html {
  background-color: #000000;
}

@font-face {
  font-family: 'PTSerif';
  src: url('./assets/PTSerif-Regular.ttf');

}

#app {
  font-family: 'Avenir', Helvetica, Arial, 'LibreBaskeville', 'LibreBaskeville-Bold';
  font-family: 'PT Serif', serif;
  font-family: 'Raleway', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
  margin-top: 50px;
}
</style>
