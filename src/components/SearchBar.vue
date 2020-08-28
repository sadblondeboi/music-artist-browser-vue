<template>
  <div class="menu">
    <input class="menu__search-bar" type="text" placeholder="Search..." />
    <div class="menu__buttons">
      <button
        class="menu__button"
        :class="{ 'menu__button--active': i === active }"
        v-for="(option, i) in options"
        :key="i"
        :ref="i"
        @click="$emit('update:active', i)"
      >
        {{ option }}
      </button>

      <div class="menu__active" :style="{ left: left }" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        newlyAdded: "Newly added",
        byTitle: "By title",
        byDate: "By date",
      },
      left: "0px",
    };
  },
  mounted() {
    addEventListener("resize", this.calculateOnResize.bind(this));
  },
  methods: {
    changeOption(payload) {
      this.$emit("search-criteria-changed", payload);
    },
    calculateOnResize() {
      this.left = `${this.activeButton.offsetLeft}px`;
    },
  },
  props: {
    active: {
      type: String,
      required: false,
    },
  },
  computed: {
    activeButton() {
      const def = Object.keys(this.options)[0];
      const refs = this.$refs[this.active || def];
      return refs && refs[0];
    },
  },
  watch: {
    active: {
      immediate: true,
      handler() {
        !this.active &&
          this.$emit("update:active", Object.keys(this.options)[0]);
      },
    },
    activeButton() {
      this.calculateOnResize();
    },
  },
  beforeDestroy() {
    removeEventListener("resize", this.calculateOnResize);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.menu {
  $this: &;

  padding: 0 $padding-x;
  width: calc(100% - 2 * #{$padding-x});

  &__search-bar {
    background-color: unset;
    width: 100%;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    border: unset;
    padding-bottom: 1em;
    border-bottom: 1px solid white;
    margin-bottom: 0.75em;
    color: white;
    font-weight: 500;
    outline: none;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    padding-bottom: $tiles-margin;
    position: relative;

    #{$this}__button {
      margin: 0;
      padding: 0;
      display: block;
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: unset;
      outline: none;
      opacity: 0.5;
      transition: opacity 0.2s ease-out;

      &--active {
        opacity: 1;
      }
    }

    #{$this}__active {
      position: absolute;
      width: 6px;
      height: 6px;
      background-color: white;
      border-radius: 50%;
      bottom: 0;
      left: 0;
      transition: left 0.2s ease-out;
    }
  }
}
</style>
