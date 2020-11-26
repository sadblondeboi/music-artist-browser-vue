<template>
  <div class="album-songs">
    <ol class="album-songs__list">
      <v-list-element
        v-for="(song, i) in songs"
        :key="i"
        @click="$emit('song', i)"
      >
        {{ song.name }}
      </v-list-element>
    </ol>
  </div>
</template>

<script>
import ListElement from "@/components/ListElement.vue";

export default {
  name: "AlbumSongs",
  components: {
    "v-list-element": ListElement,
  },
  props: {
    songs: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.album-songs {
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
