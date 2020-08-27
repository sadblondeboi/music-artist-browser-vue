<template>
  <div class="artist">
    <v-header @sidebar-change="$emit('sidebar-change', $event)" />

    <div class="artist__wrapper">
      <div class="artist__background" :style="backgroundStyle" />

      <div class="artist__informations">
        <h1 class="artist__name">{{ artist.name }}</h1>
        <p class="artist__description">
          {{ artist.descriptions && trimDescription }}
        </p>
      </div>
    </div>
    <div class="artist__albums">
      <v-album-tile
        v-for="(album, i) in albums"
        :key="i"
        :album="album"
        @click="goToAlbumPage(i)"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import AlbumTile from "../components/AlbumTile.vue";

import { getArtist } from "../services/artistsService";
import { getAlbumsByArtist } from "../services/albumsService";

export default {
  components: {
    "v-header": Header,
    "v-album-tile": AlbumTile,
  },
  data() {
    return {
      artist: {},
      albums: {},
    };
  },
  methods: {
    goToAlbumPage(id) {
      this.$router.push({
        name: "album",
        params: {
          id: id,
        },
      });
    },
  },
  async mounted() {
    const result = await Promise.all([
      getArtist(this.artistId),
      getAlbumsByArtist(this.artistId),
    ]);
    this.$set(this, "artist", result[0]);
    this.$set(this, "albums", result[1]);
  },
  computed: {
    artistId() {
      return this.$route.params.id;
    },
    backgroundStyle() {
      return { "background-image": `url(${this.artist.portrait})` };
    },
    trimDescription() {
      return (
        this.artist.descriptions[0]
          .slice(0, 100)
          .split(" ")
          .slice(0, -1)
          .join(" ") + "..."
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.artist {
  $this: &;
  $offset-x: 1.75rem;
  $offset-y: 2.5rem;

  overflow: hidden;

  &__wrapper {
    position: relative;
    min-height: calc(100vh - 2 * #{$offset-y});
    width: calc(100% - 2 * #{$offset-x});
    padding: $offset-y $offset-x;
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    #{$this}__background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-size: cover;
      background-position: center;

      &::after {
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

    #{$this}__informations {
      #{$this}__name {
        font-size: 2.5em;
        text-shadow: 1px 0.25em 1em black;
        margin-bottom: 1rem;
        font-weight: 900;
        text-transform: uppercase;
      }

      #{$this}__description {
        margin-top: 0;
        font-size: 1em;
        font-family: "Heebo";
        font-weight: 300;
        max-height: 3em;
        text-overflow: ellipsis;
      }
    }
  }

  &__albums {
    * {
      margin: 0.25em 0;
    }
  }
}
</style>
