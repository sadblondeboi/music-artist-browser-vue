<template>
  <header class="header">
    <div class="header__left">
      <v-menu-button v-show="!menuButton" @click="$emit('show-menu', true)" />
      <v-close-button v-show="menuButton" @click="$emit('show-menu', false)" />
    </div>
    <div class="header__center">
      <v-top-button
        v-if="returnButton"
        @click="$emit('router-return', 'return')"
      />
    </div>
    <div class="header__right"></div>
  </header>
</template>

<script>
import MenuButton from "./MenuButton.vue";
import TopButton from "./TopButton.vue";
import CloseButton from "./CloseButton.vue";

export default {
  name: "TheHeader",
  components: {
    "v-menu-button": MenuButton,
    "v-top-button": TopButton,
    "v-close-button": CloseButton,
  },
  props: {
    returnButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    menuButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.header {
  display: flex;
  flex-direction: row;
  position: absolute;
  width: calc(100% - 2 * 1.25rem);
  padding: $padding-y 1.25rem;
  z-index: 1000;

  &__left,
  &__center,
  &__right {
    width: calc(100% / 3);
    display: flex;
    flex-direction: row;
  }

  &__left {
    justify-content: left;
  }

  &__center {
    justify-content: center;
  }

  &__right {
    justify-content: right;
  }
}
</style>
