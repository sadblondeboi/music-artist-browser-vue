<template>
  <div class="sidebar">
    <transition name="slide-sidebar">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <div class="inside-header">
          <button class ="closeButton" @click="toggleSidebarPanel"></button>
        </div>
        <div class="sidebar-panel-nav">
            <div class="home-button">
            <button class="nav-button" :class="{active: isActive}" @click="routerChange('/')">Home</button>
            </div>

            <!-- <button class="nav-button" @click="routerChange('/' + actualArtist.id )">{{actualArtist.name}}</button>

            <button class="nav-button" @click="routerChange('/' + actualArtist.id + '/' + actualAlbum.id )">{{actualAlbum.name}}</button> -->

        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { store, mutations } from "@/store.js";

export default {
  data() {
    return {
      isActive: true,
      // actualArtist: store.actualArtist,
      // actualAlbum: store.actualAlbum,
      // actualTrack: store.actualTrack
    }
  },
  methods: {
    toggleSidebarPanel: mutations.toggleNav,
    routerChange(newPath) {
      if(this.$route.path == newPath)
        console.log('you are already there');
      else
        this.$router.push(newPath);
    },
    setActive() {
      if(this.$route.path == '/Home/')
        this.isActive = true;
      else 
        this.isActive = false;
    }
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    }
  },
  watch: {
    isPanelOpen(state) {
      this.$emit("sidebar-change", state);
    }
  },
  updated () {
    this.setActive()
  }
};
</script>

<style>
/* transitions */

.slide-sidebar-leave-active {
  animation: left-sidebar 0.5s;
  transition: all ease;
}

.slide-sidebar-enter-active {
  animation: right-sidebar 0.5s;
  transition: all ease;
}

@keyframes right-sidebar {
  from {
    margin-left: -100vw;
  }
  to {
    margin-right: 0;
  }
}

@keyframes left-sidebar {
  from {
    margin-right: 0;
  }
  to {
    margin-left: -100vw;
  }
}

.sidebar-panel {
  overflow-y: auto;
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  width: 100vw;
  list-style-type: none;
}

.inside-header {
  margin-bottom: 2vh;
  margin-left: 2vw;
  margin-right: 2vw;
  padding-top: 4vh;
}

.sidebar-panel-nav {
  padding-left: 2vw;
}

button {
  border: none;
  padding: 20px 20px;
}

.nav-button {
  padding: 20px 50px;
}

.closeButton {
  background: url(../assets/close.svg) no-repeat;
  background-position: center center;
}

.nav-button {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
  background: none;
}

.home-button {
  background: url(../assets/home-icon.svg) no-repeat;
  background-position: 1.5vh 5.75vw;
}

.active {
  /* border: 1px solid white; */
}
</style>