<template>
  <div class="home">
    <div class="home__header">
      Explore
    </div>
    <SearchBar class="home__menu" :active.sync="active" />
    <div class="home__artists-list" v-if="loaded">
      <v-album-tile
        v-for="(album, i) in albums"
        :key="i"
        :album="album"
        :artist="artists[album.artist]"
        @click="goToArtistPage(i)"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import ArtistTile from "@/components/artist/ArtistTile.vue";

import { getAlbums } from "../services/albumsService";
import { getArtist } from "../services/artistsService";

export default {
  components: {
    "v-album-tile": ArtistTile,
    SearchBar,
  },
  data() {
    return {
      albums: {},
      artists: {},
      active: "newlyAdded",
    };
  },
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    },
    goToArtistPage(id) {
      this.$router.push({
        name: "artist",
        params: {
          id: id,
        },
      });
    },
  },
  async mounted() {
    this.$set(this, "albums", await getAlbums());
    const artistsIds = [
      ...new Set(Object.values(this.albums).map((album) => album.artist)),
    ];
    await Promise.all(
      artistsIds.map(async (id) => {
        this.$set(this.artists, id, await getArtist(id));
      })
    );
  },
  computed: {
    loaded() {
      return (
        Object.keys(this.albums).length > 0 &&
        Object.keys(this.artists).length > 0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.home {
  &__header {
    margin: $padding-x;
    font-size: 2.875rem;
    font-weight: 600;
  }

  &__menu {
    margin-bottom: $tiles-margin;
  }

  &__artists-list {
    * {
      margin-bottom: $tiles-margin;
    }
  }
}
</style>
