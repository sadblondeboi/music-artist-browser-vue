// prawdopodobnie koniecznym będzie dodanie sidebara do app, zamiast do headera, zrobię to jutro
<template>
  <div class="sidebar">
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <div class="inside-header">
          <button class ="closeButton" @click="toggleSidebarPanel"></button>
        </div>
        <ul class="sidebar-panel-nav">
          <li>
            <button class="nav-button" @click="routerChange('/Home/')">Home</button>
          </li>
          <li>
            <button class="nav-button" @click="routerChange('/')">Album</button>
          </li>
          <li>
            <button class="nav-button" @click="routerChange('/Artist')">Artist</button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { store, mutations } from "@/store.js";

export default {
  methods: {
    toggleSidebarPanel: mutations.toggleNav,
    routerChange(path) {
      this.$router.push(path);
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
  }
};
</script>

<style>
/* transitions */

.slide-leave-active {
  animation: left 0.5s;
  transition: all ease;
}

.slide-enter-active {
  animation: right 0.5s;
  transition: all ease;
}

@keyframes right {
  from {
    margin-left: -100vw;
  }
  to {
    margin-right: 0;
  }
}

@keyframes left {
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
}

.inside-header {
  margin-bottom: 2vh;
  margin-left: 2vw;
  margin-right: 2vw;
  padding-top: 4vh;
}

/* test styling */
ul.sidebar-panel-nav {
  list-style-type: none;
}

button {
  cursor: pointer;
  border: none;
  padding: 20px 20px;
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
</style>