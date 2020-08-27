<template>
  <div class="artist-tile" @click="$emit('click')">
    <div class="artist-tile__portrait" :style="portraitStyle" />
    <div class="artist-tile__name">
      {{ artist.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      required: true,
    },
  },
  computed: {
    portraitStyle() {
      return {
        "background-image": `url(${this.artist.portrait})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.artist-tile {
  font-size: 1.375em;
  text-shadow: 1px 1px 2.25em black;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  height: 6em;
  position: relative;

  &__portrait {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }

  &__name {
    font-weight: bold;
    font-size: 1.25em;
    width: 100%;
  }
}
</style>
