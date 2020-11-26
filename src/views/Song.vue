<template>
  <div class="song">
    <div class="song__header" :style="headerTopOffset">
      {{ song.name }}
    </div>
    <div class="song__lyrics">
      <p v-for="(verse, i) in song.lyrics" :key="i" v-html="verse"></p>
    </div>
  </div>
</template>

<script>
import { HeaderOffsetMixin } from "../mixins/HeaderOffsetMixin";
import { getSong } from "../services/songsService";

export default {
  name: "Song",
  mixins: [HeaderOffsetMixin],
  data() {
    return {
      song: {},
    };
  },
  async mounted() {
    this.$emit("previous-page", {
      name: "album-songs",
      params: {
        id: this.albumId,
      },
    });

    this.song = await getSong(this.songId);
  },
  computed: {
    albumId() {
      return this.$route.params.id;
    },
    songId() {
      return this.$route.params.songId;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.song {
  padding: 0 $padding-x;
  @include device-height();

  &__header {
    padding-bottom: 1rem;
    font-weight: 700;
    border-bottom: 1px solid white;
  }

  &__lyrics {
    font-family: 'Libre Baskerville', serif;
    line-height: 1.5rem;
    font-size: .75rem;
    letter-spacing: 0.1px;
  }
}
</style>
