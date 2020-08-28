<template>
  <div class="album">
    <div class="album__background" :style="backgroundStyle">
      <div class="album__background-light-gradient" :style="gradientStyle" />
    </div>
    <div class="album__wrapper">
      <div class="album__artist-name">
        {{ artist.name }}
      </div>
      <div class="album__name">
        {{ album.name }}
      </div>
      <div class="album__description">
        {{ trimmedDescription }}
      </div>
      <div class="album__separator" />
      <div class="album__release-year">
        {{ album.releaseDate }}
      </div>
    </div>
    <div class="album__more-button">
      <v-see-more-button @click="goToFullAlbum()" />
    </div>
  </div>
</template>

<script>
import { getAlbum } from "../services/albumsService";
import { getArtist } from "../services/artistsService";
import SeeMoreButton from "../components/album/SeeMoreButton.vue";

export default {
  components: {
    "v-see-more-button": SeeMoreButton,
  },
  data() {
    return {
      album: {},
      artist: {},
      deg: "0deg",
    };
  },
  async mounted() {
    this.album = await getAlbum(this.albumId);
    this.artist = await getArtist(this.album.artist);

    this.calculateGradientDeg();
    addEventListener("resize", this.calculateGradientDeg.bind(this));
  },
  methods: {
    calculateGradientDeg() {
      this.deg = `${(Math.atan(window.innerHeight / window.innerWidth) * -180) /
        Math.PI +
        180}deg`;
    },
    goToFullAlbum() {
      this.$emit("router", {
        name: "album-full",
        params: {
          id: this.albumId,
        },
      });
    },
  },
  computed: {
    albumId() {
      return this.$route.params.id;
    },
    gradientStyle() {
      return {
        background: `linear-gradient(${this.deg}, rgba(255, 255, 255, .05) 49.9%, rgba(0, 0, 0, 0) 50.1%)`,
      };
    },
    backgroundStyle() {
      return { "background-image": `url(${this.album.cover})` };
    },
    trimmedDescription() {
      return (
        this.album.descriptions &&
        this.album.descriptions[0]
          .slice(0, 130)
          .split(" ")
          .slice(0, -1)
          .join(" ") + "..."
      );
    },
  },
  beforeDestroy() {
    removeEventListener("resize", this.calculateGradientDeg);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.album {
  $this: &;

  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 2 * #{$padding-y});
  width: calc(100% - 2 * #{$padding-x});
  padding: $padding-y $padding-x;

  &__background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100% + #{$animation-margin});
    top: -$animation-margin;
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 0.75;

    &::after,
    #{$this}__background-light-gradient {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }

  &__wrapper {
    margin-top: auto;

    #{$this}__artist-name {
      font-size: 1.375rem;
      font-weight: 400;
      margin-bottom: 0.8rem;
      line-height: 1;
    }

    #{$this}__name {
      font-size: 2.875rem;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 0.8rem;
      text-transform: uppercase;
    }

    #{$this}__description {
      font-size: 1rem;
      font-family: "PT Serif", serif;
      opacity: 0.8;
      margin-bottom: 1rem;
    }

    #{$this}__separator {
      width: 3rem;
      height: 1px;
      background-color: white;
      opacity: 0.75;
      margin: auto;
      margin-bottom: 1rem;
    }

    #{$this}__release-year {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  #{$this}__more-button {
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
