<template>
  <div id="app">
    
    <transition name="slide" mode="out-in">
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
}

body {
  margin: unset;
}

html {
  background-color: black;
}

@keyframes slide{
  from {
    margin-top: 100%;
  }
  to {
    margin-top: 0%;
  }
}

@keyframes slide-leave {
  from {
    margin-bottom: 0%;
  }
  to {
    margin-bottom: 100%;
  }
}

.slide-enter {

}
.slide-leave {
  /* sprawdz w ktorych momentach animacji co sie wykonuje, mysle ze w tym caly haczyk  */
}

.slide-leave-active {
  animation-duration: .5s;
  animation-name: slide-leave;
}

.slide-enter-active {
  animation-duration: .5s;
  animation-name: slide;
}
</style>
