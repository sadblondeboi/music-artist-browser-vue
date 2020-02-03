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

@import url('https://fonts.googleapis.com/css?family=PT+Serif:400,700|Raleway:400,700&display=swap');

html {
  background-color: #000000;
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
