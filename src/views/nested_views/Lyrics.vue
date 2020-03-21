<template>
  <div class="main">
      <div class="test">
        {{actualTrackData.lyrics}}
      </div>
  </div>
</template>

<script>
const axios = require('axios');
import { store } from "@/store.js";
export default {
    data () {
		return {
            actualTrack: store.actualTrack,
            actualTrackData: {}
        }   
    },
    mounted () {
    axios
      .get('http://api.geniusbutbetter:8081/tracks/' + this.actualTrack.id)
      // + this.$route.params.albumLink + '/tracks'
      .then(
        response => (this.actualTrackData = response.data)
      )
  }
}
</script>

<style scoped>
.main {
  position: absolute;
  min-width: 100vw;
  max-width: 100vw;
}
</style>