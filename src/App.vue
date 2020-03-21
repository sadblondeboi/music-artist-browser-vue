<template>
  <div id="app">
          <Sidebar @sidebar-change="setShowSidebar($event)"> 
          </Sidebar>
    <transition :name="this.transitionName"
                @enter="closeSidebar">    
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import { store, mutations } from '@/store.js'

export default {
  name: 'app',
  components: {
    Sidebar,
  },
  data () {
    return {
      showSidebar: false,
    }
  },
  methods: {
    setShowSidebar(event) {
      this.showSidebar = event;
    },
    closeSidebar: mutations.closeNav, 
    toggleSidebarPanel: mutations.toggleNav,
  },
  computed: {
    transitionName() {
      return this.showSidebar ? "sidebar-anim" : "router-anim";
    },
    isPanelOpen() {
      return store.isNavOpen;
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Heebo:300,400&display=swap');

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
  animation: up .75s;
  transition: all ease;
}

.router-anim-leave-active{
  animation: down .75s;
  transition: all ease;
}

@keyframes down {
  from {
    margin-top: 0vh;
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
    margin-bottom: 0vh;
  }
}

/* sidebar animations */
/* tutaj jest do zmiany na enter/leave-active, ale ze względu na to że nie chcę marnować więcej czasu jest niedopracowane. View, do którego przechodzimy,
nie wchodzi jednocześnie z wychodzeniem sidebara */
.sidebar-anim-enter{
    animation: sid-right .5s;
    transition: all ease;
}

.sidebar-anim-leave{
    animation: sid-left .5s;
    transition: all ease;
}


@keyframes sid-right {
    from {
        margin-left: -100vw;
    }
    to {
        margin-right: 0;
    }
}

@keyframes sid-left {
    from {
    margin-right: -100vw;
  }
  to{
    margin-left: -100vw;
  }
}

</style>
