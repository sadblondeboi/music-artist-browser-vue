<template>
  <div id="app">
    
    <transition :name="transitionName" mode="out-in">
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
      transitionName: 'slide'
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('chuj');
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide' : 'slide2'
    next()
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

@keyframes slide{
  from {
    margin-bottom: 230%;
  }
  to {
    margin-bottom: 0%;
  }
}
@keyframes slide-leave{
  from {
    margin-top: 0%;
  }
  to {
    margin-top: -230%;
  }
}

.slide-enter {

}
.slide-leave {
  /* slide dla jednego komponentu, dla drugiego należy zrobić podobną akcję, ale lekko zmienić
  aby ODWRÓCIĆ to, ponieważ nie loopujemy przez komponenty, tylko chcemy wrócić z jednego do drugiego
  w logiczny sposób:)), powodzenia  */
}

.slide-leave-active {
  animation-duration: 1s;
  animation-name: slide-leave;
}

.slide-enter-active {
  animation-duration: 1s;
  animation-name: slide;
}

@keyframes slide2{
  from {
    margin-bottom: 230%;
  }
  to {
    margin-bottom: 0%;
  }
}
@keyframes slide2-leave{
  from {
    margin-top: 230%;
  }
  to {
    margin-top: -230%;
  }
}

</style>
