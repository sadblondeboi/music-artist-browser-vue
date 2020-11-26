<template>
  <div class="album-tile" @click="$emit('click')">
    <div class="album-tile__background" :style="backgroundStyle" />
    <span class="album-tile__text-wrapper">
      <div class="album-tile__artist-name">
        {{ artist.name }}
      </div>
      <div class="album-tile__name">
        {{ album.name }}
      </div>
    </span>
    <div class="album-tile__release-date">
      {{ album.releaseDate }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumTile",
  props: {
    album: {
      type: Object,
      required: true,
    },
    artist: {
      type: Object,
      required: true,
    },
  },
  computed: {
    backgroundStyle() {
      return {
        "background-image": `url(${this.album.cover})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.album-tile {
  $this: &;

  text-shadow: 1px 1px 2.25em black;
  color: white;
  display: flex;
  align-items: center;
  height: 8em;
  position: relative;
  padding: 0 $padding-x;
  width: calc(100% - 2 * #{$padding-x});

  &__background {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    left: 0;
    top: 0;
    background-position: center;
    z-index: -1;
    opacity: 0.6;

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
        rgba(0, 0, 0, 0.75) 100%
      );
    }
  }

  &__text-wrapper {
    width: 100%;

    #{$this}__artist-name {
      font-weight: 500;
      opacity: 0.85;
    }

    #{$this}__name {
      font-weight: 900;
      font-size: 1.375em;
      width: 100%;
      text-transform: uppercase;
    }
  }

  &__release-date {
    margin-left: auto;
    font-weight: 500;
  }
}
</style>
