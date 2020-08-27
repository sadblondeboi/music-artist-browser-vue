<template>
  <div class="main">
    <div class="wrapper">
      <div class="track-name">
        {{ actualTrackData.name }}
      </div>
      <div class="lyrics">
        {{ actualTrackData.lyrics }}
      </div>
    </div>
  </div>
</template>

<script>
import { getSong } from "../../services/songsService";

export default {
  data() {
    return {
      songs: {},
    };
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  async mounted() {
    this.songs = await Promise.all(this.album.songs.map(song => getSong(song)));
  },
};
</script>

<style scoped>
.main {
  position: absolute;
  min-width: 100vw;
  max-width: 100vw;
  padding-top: 1vh;
  padding-bottom: 2vh;
  font-family: "Heebo";
}

.main .track-name {
  text-align: center;
  margin: auto;
  font-size: 24px;
}

.wrapper {
  margin-left: 4vw;
  margin-right: 4vw;

  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 2;

  grid-gap: 1vh;
}
</style>
