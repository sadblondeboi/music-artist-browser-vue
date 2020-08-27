<template>
  <div class="album-tile" @click="$emit('click')">
    <div class="album-tile__cover" :style="coverStyle" />
    <div class="album-tile__description">
      <h1 class="album-tile__name">{{ album.name }}</h1>
      <span class="album-tile__release-date">{{ album.releaseDate }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: Object,
  },
  computed: {
    coverStyle() {
      return {
        "background-image": `url(${this.album.cover})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.album-tile {
  $this: &;
  width: 100%;
  height: 8em;
  position: relative;

  &__cover {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 0.5;

    &::before {
      content: "";
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000ba 100%);
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }

  &__description {
    display: flex;
    flex-direction: row;
    margin: 0 2em;
    align-items: center;
    height: 100%;

    #{$this}__name {
      font-size: 2em;
      font-weight: 700;
    }

    #{$this}__release-date {
      margin-left: auto;
      font-size: 1.25em;
    }
  }
}
</style>
