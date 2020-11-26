<template>
  <div class="menu" :style="headerTopOffset">
    <ol class="menu__list">
      <v-list-element @click="goToHome()">Homepage</v-list-element>
    </ol>
  </div>
</template>

<script>
import ListElement from "../ListElement.vue";
import { HeaderOffsetMixin } from "../../mixins/HeaderOffsetMixin";

export default {
  name: "TheMenu",
  mixins: [HeaderOffsetMixin],
  components: {
    "v-list-element": ListElement,
  },
  methods: {
    goToHome() {
      this.$emit("router", {
        name: "home",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.menu {
  top: 0;
  left: 0;
  position: absolute;
  z-index: 999;
  display: block;
  width: 100%;
  background-color: black;
  min-height: 100%;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0 $padding-x;
  }
}
</style>
