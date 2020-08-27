<template>
  <div class="artist-list" >
    <ArtistTile v-for="(artist, i) in this.artists" :key="i" :artist="artist" @click="$emit('active-artist', i)"/>
  </div>
</template>

<script>
import ArtistTile from "../components/ArtistTile.vue";

export default {
  components: {
    ArtistTile,
  },
  props: {
    artists: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.artist-list {
}
</style>
