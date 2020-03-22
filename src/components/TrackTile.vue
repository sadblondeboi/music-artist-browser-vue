<template>
  <div class="track">
      <div
        @click="routerChange(track.id)"
        :id="track.id">
            <span id="track-name">{{track.name}}</span>
      </div>
      
  </div>
</template>

<script>
import { mutations } from "@/store.js";

export default {
    props: {
        track: Object
    },
    methods: {
    setActualTrack: mutations.setActualTrack,
        routerChange(newPath) {
            this.$router.push({
                path: `${this.$route.fullPath}/${newPath}`
            });
            this.setActualTrack(this.track);
        },
    },
}
</script>

<style>
.track {
    padding: 1vh;
    font-family: 'Heebo';
}

#track-name {
    display: block;
    border-bottom: 1px solid white;
}

</style>