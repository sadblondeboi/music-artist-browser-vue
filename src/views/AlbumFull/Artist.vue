<template>
  <div class="album-artist">
    <div class="album-artist__portrait" :style="portraitStyle"></div>
    <div class="album-artist__content">
      <div class="album-artist__headline">
        <div class="album-artist__name">{{ artist.name }}</div>
        <div class="album-artist__lifespan">
          <span v-for="(date, i) in artist.lifespan" :key="i">
            {{ new Date(date) | dateFormat("DD MMM YYYY") }}
            {{ dash(i) }}
          </span>
        </div>
      </div>
      <div class="album-artist__description">
        <p v-for="(description, i) in artist.descriptions" :key="i">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumArtist",
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
  methods: {
    dash(i) {
      if (this.artist.lifespan[i] && this.artist.lifespan[i + 1]) {
        return "-";
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

$portrait-height: 70vh;

.album-artist {
  $this: &;

  &__portrait {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(#{$portrait-height} + #{$animation-margin});
    top: -$animation-margin;
    z-index: -1;
    opacity: 0.8;
    background-size: cover;
    background-position: center;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      position: absolute;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 35%
      );
    }
  }

  &__content {
    margin-top: $portrait-height / 2;
    position: relative;

    #{$this}__headline {
      text-align: center;
      width: 100%;

      #{$this}__name {
        font-size: 1.375rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      #{$this}__lifespan {
        margin-bottom: 1rem;
        opacity: 0.75;
      }
    }

    #{$this}__description {
      font-family: 'Libre Baskerville', serif;
      line-height: 1.5rem;
      letter-spacing: 0.2px;

      &::first-letter {
        float: left;
        font-size: 4.5rem;
        margin-right: .5rem;
        line-height: 1;
      }
    }
  }
}
</style>
