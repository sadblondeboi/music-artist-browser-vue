<template>
  <div class="track">
      <div
        @click="routerChange(track.id)"
        :id="track.id">
            {{track.name}}
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
}

</style>