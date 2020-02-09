<template>
  <div id="app">
    
    <transition name="router-anim">
      <router-view> </router-view>
    </transition>
    <!-- <Home /> -->
  </div>
</template>

<script>
// import Home from './components/Home.vue';
// import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    // Home,
    // Header
  },
  data () {
    return {
    }
  },
  methods: {
      transitionNameEvent(event) {
          this.transitionName = event;
      }
  }
}
</script>

<style>

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
  min-height: 100vh;
  position: absolute;

}

body {
  margin: unset;
  height: 100%;
  overflow: hidden;
}

html {
  background-color: black;
}
/* SLIDE UP */
.router-anim-enter-active{
  animation: up 1s;
  transition: all ease;
}

.router-anim-leave-active{
  animation: down 1s;
  transition: all ease;
}

@keyframes down {
  from {
    margin-top: 0;
  }
  to{
    margin-top: -100vh;
  }
}

@keyframes up {
  from {
    margin-bottom: 100vh;
  }
  to{
    margin-bottom: 0;
  }
}



</style>
