<template>
  <div class="main">
    <img id="album-cover" :src="album.portrait" />
    <div class="tracks">
      <!-- tu trzeba napisac ze to sa tracks of that album cos tam cos tam -->
      <TrackTile v-for="(track, i) in tracks" :key="i" :track="track" />
    </div>
  </div>
</template>

<script>
import TrackTile from "../../components/TrackTile.vue";
import { getSong } from "../../services/songsService";

export default {
  components: {
    TrackTile,
  },
  data() {
    return {
      tracks: {},
    };
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  watch: {
    album: {
      async handler(newAlbum) {
        newAlbum.songs &&
          (this.tracks = await Promise.all(newAlbum.songs.map((song) => getSong(song))));
      },
    },
  },
};
</script>

<style scoped>
.main {
  position: absolute;
  min-width: 100vw;
  max-width: 100vw;
}

.tracks {
  margin-top: 2vh;
}

#album-cover {
  width: 80vw;
  padding: 2vw 5vw 0vw 10vw;
}
</style>
