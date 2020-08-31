<template>
  <div class="album-main" :style="headerTopOffset">
    <v-indicator-navigation
      class="album-main__header"
      :options="options"
      :active.sync="active"
      @update:active="goToSubPage($event)"
    />
    <transition name="fade" mode="out-in">
      <router-view
        :album="album"
        :artist="artist"
        :songs="songs"
        @song="goToSongPage"
      />
    </transition>
  </div>
</template>

<script>
import IndicatorNavigation from "../../components/navigation/IndicatorNavigation.vue";
import { HeaderOffsetMixin } from "../../mixins/HeaderOffsetMixin";
import { getAlbum } from "../../services/albumsService";
import { getArtist } from "../../services/artistsService";
import { getSong } from "../../services/songsService";

export default {
  mixins: [HeaderOffsetMixin],
  name: "AlbumFull",
  components: {
    "v-indicator-navigation": IndicatorNavigation,
  },
  data() {
    return {
      options: {
        "album-about": "About",
        "album-songs": "Songs",
        "album-artist": "Scott Walker",
      },
      active: "album-about",
      album: {},
      artist: {},
      songs: {},
    };
  },
  async mounted() {
    this.$emit("previous-page", {
      name: "album",
      params: {
        id: this.albumId,
      },
    });
    this.active = this.$route.name;

    this.album = await getAlbum(this.albumId);

    this.album.songs.forEach(async (song) => {
      const s = await getSong(song);
      this.$set(this.songs, song, s);
    });
    this.artist = await getArtist(this.album.artist);

    this.options["album-artist"] = this.artist.name;
  },
  methods: {
    async goToSubPage(name) {
      try {
        await this.$router.push({
          name,
        });
      } catch (e) {
        e;
      }
    },
    goToSongPage(songId) {
      this.$emit("router", {
        name: "song",
        params: {
          id: this.albumId,
          songId,
        },
      });
    },
  },
  computed: {
    albumId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.album-main {
  $this: &;
  padding: $padding-y $padding-x;
  position: relative;

  &__header {
    z-index: 1;
    margin-bottom: 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
