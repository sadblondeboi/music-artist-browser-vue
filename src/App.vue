<template>
  <div id="app">
    <v-sidebar />
    <transition name="router-anim" @enter="closeSidebar">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "app",
  components: {
    "v-sidebar": Sidebar,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    setShowSidebar(event) {
      this.showSidebar = event;
    },
  },

};
</script>

<style lang="scss">
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
}
</style>
