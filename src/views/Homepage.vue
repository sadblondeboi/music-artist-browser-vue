<template>
  <div class="home">
    <div class="home__header" :style="headerTopOffset">
      Explore
    </div>
    <div class="home__menu">
      <v-search-bar v-model="search" />
      <v-indicator-navigation :options="options" :active.sync="active" />
    </div>
    <div class="home__artists-list" v-if="loaded">
      <v-album-tile
        v-for="(album, i) in bySearch"
        :key="i"
        :album="album"
        :artist="artists[album.artist] || {}"
        @click="goToArtistPage(album.id)"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import AlbumTile from "@/components/artist/AlbumTile.vue";
import IndicatorNavigation from "@/components/navigation/IndicatorNavigation.vue";

import { HeaderOffsetMixin } from "../mixins/HeaderOffsetMixin";

import { getAlbums } from "../services/albumsService";
import { getArtist } from "../services/artistsService";

export default {
  mixins: [HeaderOffsetMixin],
  components: {
    "v-album-tile": AlbumTile,
    "v-indicator-navigation": IndicatorNavigation,
    "v-search-bar": SearchBar,
  },
  data() {
    return {
      albums: {},
      artists: {},
      active: "newlyAdded",
      options: {
        newlyAdded: "Newly added",
        byTitle: "By title",
        byDate: "By date",
      },
      search: "",
    };
  },
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    },
    goToArtistPage(id) {
      this.$emit("router", {
        name: "album",
        params: {
          id: id,
        },
      });
    },
  },
  async mounted() {
    this.$emit("previous-page", undefined);

    this.albums = await getAlbums();
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
    albumsArray() {
      const ids = Object.keys(this.albums);
      const newArray = Object.values(this.albums).map((album, i) => {
        return {
          ...album,
          id: ids[i],
        };
      });
      return newArray;
    },
    byFilter() {
      switch (this.active) {
        case "byTitle":
          return [...this.albumsArray].sort((a, b) => a.name > b.name ? 1 : -1);
        case "byDate":
          return [...this.albumsArray].sort((a, b) => a.releaseDate < b.releaseDate ? 1 : -1);
        default:
          return this.albumsArray;
      }
    },
    bySearch() {
      return [...this.byFilter].filter(album => album.name.toLowerCase().startsWith(this.search.toLowerCase().trim()));

    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.home {
  min-height: 100vh;

  &__header {
    margin: $padding-x;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 2.875rem;
    font-weight: 600;
  }

  &__menu {
    padding: 0 $padding-x;
    margin-bottom: $tiles-margin;
  }

  &__artists-list {
    * {
      margin-bottom: $tiles-margin;
    }
  }
}
</style>
