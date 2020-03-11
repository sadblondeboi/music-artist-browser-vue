// prawdopodobnie koniecznym będzie dodanie sidebara do app, zamiast do headera, zrobię to jutro
<template>
  <div class="sidebar">
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <div class="inside-header">
          <button @click="closeSidebarPanel"></button>
        </div>
        <ul class="sidebar-panel-nav">
          <li>
            <a href="/Home">actual homepage</a>
          </li>
          <li>
            <a href="/">Artist</a>
          </li>
          <li>
            <a href="/artist">Artist in depth</a>
          </li>
        </ul>
        <button @click="routerChange('/')">Go to Foo</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { store, mutations } from "@/store.js";

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
    routerChange(path) {
      this.closeSidebarPanel();
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

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

button {
  cursor: pointer;
  border: none;
  padding: 20px 20px;
  background: url(../assets/close.svg) no-repeat;
  background-position: center center;
}
</style>