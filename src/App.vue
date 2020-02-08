<template>
  <div id="app">
    
    <transition :name="transitionName" mode="out-in">
      <router-view @transition-name="transitionNameEvent"> </router-view>
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
      transitionName: 'slide-up'
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
}

html {
  background-color: grey;
}
/* SLIDE UP */
.slide-up-enter {
    transform: translateY(100%);
}

.slide-up-enter-to, .slide-up-leave {
    transform: translateY(0%);
}

.slide-up-leave-to {
    transform: translateY(-100%);
}

.slide-up-leave-active {
  transition: all 1s ease;
}

.slide-up-enter-active {
  transition: all 1s ease;
}
/* SLIDE DOWN */
.slide-down-enter {
    transform: translateY(-100%);
}

.slide-down-enter-to, .slide-down-leave {
    transform: translateY(0%);
}

.slide-down-leave-to {
    transform: translateY(100%);
}

.slide-down-leave-active {
  transition: all 1s ease;
}

.slide-down-enter-active {
  transition: all 1s ease;
}



</style>
