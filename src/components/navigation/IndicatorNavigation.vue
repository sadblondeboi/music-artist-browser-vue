<template>
  <div class="indicator-navigation">
    <button
      class="indicator-navigation__button"
      :class="{ 'indicator-navigation__button--active': key === active }"
      v-for="(option, key) in options"
      :key="key"
      :ref="key"
      @click="$emit('update:active', key)"
    >
      {{ option }}
    </button>
    <div class="indicator-navigation__active" :style="{ left: left }" />
  </div>
</template>

<script>
export default {
  name: "IndicatorNavigation",
  data() {
    return {
      left: "0px",
    };
  },
  props: {
    options: {
      type: Object,
      required: true,
    },
    active: {
      type: String,
      required: true,
    },
  },
  computed: {
    activeButton() {
      const def = Object.keys(this.options)[0];
      const refs = this.$refs[this.active || def];
      return refs && refs[0];
    },
  },
  mounted() {
    addEventListener("resize", this.calculateOnResize.bind(this));
  },
  methods: {
    calculateOnResize() {
      this.left = `${this.activeButton.offsetLeft}px`;
    },
  },
  watch: {
    active: {
      handler() {
        this.calculateOnResize();
      },
    },
  },
  beforeDestroy() {
    removeEventListener("resize", this.calculateOnResize);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.indicator-navigation {
  $this: &;

  display: flex;
  justify-content: space-between;
  padding-bottom: $tiles-margin;
  position: relative;

  &__button {
    opacity: 0.75;
    transition: opacity 0.2s ease-out;

    &--active {
      opacity: 1;
    }
  }

  &__active {
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
</style>
