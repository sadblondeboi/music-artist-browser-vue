<template>
  <div id="app">
    <!-- <v-sidebar /> -->
    <v-header @router-return="goToPreviousPage" />
    <transition :name="transitionName" mode="out-in">
      <router-view @router="goToPage($event)"> </router-view>
    </transition>
  </div>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";

// import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "app",
  components: {
    // "v-sidebar": Sidebar,
    "v-header": TheHeader,
  },
  data() {
    return {
      showSidebar: false,
      transitionName: "slide-top",
    };
  },
  methods: {
    setShowSidebar(event) {
      this.showSidebar = event;
    },
    goToPreviousPage() {
      this.transitionName = "slide-bottom";
      this.$router.go(-1);
    },
    goToPage(event) {
      this.transitionName = "slide-top";
      this.$router.push(event);
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/styles";
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Raleway:wght@300;400;500;600;700;900&display=swap");

body {
  margin: unset;
  background-color: black;
}

#app {
  font-family: "Raleway", sans-serif;
  color: white;
  width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
}

svg {
  fill: white;
}

button {
  margin: 0;
  padding: 0;
  display: block;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: unset;
  outline: none;
  border: none;
}

.slide-top-enter-active,
.slide-top-leave-active,
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: ease-in-out;
}

.slide-top-enter,
.slide-bottom-leave-active {
  opacity: 0;
  transform: translateY(#{$animation-margin});
}

.slide-top-leave-active,
.slide-bottom-enter {
  opacity: 0;
  transform: translateY(-#{$animation-margin});
}
</style>
