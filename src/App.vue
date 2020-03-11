<template>
  <div id="app">
    <transition name="router-anim" >
      <router-view> </router-view>
    </transition>
    <!-- <Home /> -->
  </div>
</template>

<script>
// import Home from './components/Home.vue';
// import Header from './components/Header.vue';
// import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    // Sidebar,
    // Home,
    // Header
  },
  data () {
    return {
      showSidebar: false,
    }
  },
  methods: {
      transitionNameEvent(event) {
          this.transitionName = event;
      },
      showNav() {
        this.showSidebar = !this.showSidebar;
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
  
  min-height: 100vh;
  min-width: 100vw;

  position: absolute;
  color: white;

}

body {
  margin: unset;
  background-color: black;

}

/* menu  */

.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    padding: none;
    min-height: 100vh;
    background-color: black;
    z-index: 999;
    transition: all .5s ease-in-out;
    
}

.show {
  width: 100vw;
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
