<template>
  <div class="sidebar">
    
      
      <transition name="slide">
          <div  v-if="isPanelOpen"
                class="sidebar-panel">
                <button @click="closeSidebarPanel"></button>
                <slot></slot>
          </div>
      </transition>
  </div>
</template>

<script>
import { store, mutations } from '@/store.js'

export default {
    methods: {
        closeSidebarPanel: mutations.toggleNav
    },
    computed: {
       isPanelOpen() {
            return store.isNavOpen;
        }
    }
}
</script>

<style>
/* transitions */

.slide-leave-active {
    animation: left .5s;
    transition: all ease;
}

.slide-enter-active{
    animation: right .5s;
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
  to{
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

</style>