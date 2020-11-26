<template>
  <div id="app" :style="{ '--vh': vh }">
    <v-header
      @router-return="goToPreviousPage"
      @show-menu="showMenu = $event"
      :returnButton="!!previousPage && !showMenu"
      :menuButton="showMenu"
    />
    <transition name="slide">
      <v-menu v-if="showMenu" @router="[goToPage($event), (showMenu = false)]"/>
    </transition>
    <transition :name="transitionName" mode="out-in">
      <router-view
        @router="goToPage($event)"
        @previous-page="previousPage = $event"
      >
      </router-view>
    </transition>
  </div>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import TheMenu from "./components/menu/TheMenu.vue";

export default {
  name: "app",
  components: {
    "v-menu": TheMenu,
    "v-header": TheHeader,
  },
  data() {
    return {
      showMenu: false,
      transitionName: "slide-top",
      vh: "0px",
      previousPage: undefined,
    };
  },
  mounted() {
    this.setProperHeight();
    addEventListener("resize", this.setProperHeight.bind(this));
  },
  methods: {
    setShowSidebar(event) {
      this.showSidebar = event;
    },
    async goToPreviousPage() {
      this.transitionName = "slide-bottom";
      try {
        await this.$router.push(this.previousPage);
      } catch (e) {
        e;
      }
    },
    async goToPage(event) {
      this.transitionName = "slide-top";
      try {
        await this.$router.push(event);
      } catch (e) {
        e;
      }
    },
    setProperHeight() {
      this.vh = `${window.innerHeight * 0.01}px`;
    },
  },
  beforeDestroy() {
    removeEventListener("resize", this.setProperHeight);
  },
};
</script>

<style lang="scss">
@import "@/scss/styles";
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap");

body {
  margin: unset;
  background-color: black;
}

#app {
  font-family: "Raleway", sans-serif;
  color: white;
  width: 100vw;
  overflow-x: hidden;
  position: relative;
  max-width: 480px;
  margin: auto;
  @include device-height();
}

svg {
  fill: white;
}

::-webkit-scrollbar {
    display: none;
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

.slide-enter-active,
.slide-leave-active {
  transition: transform ease-in-out 0.5s;
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter {
  transform: translateX(-100%);
}
</style>
