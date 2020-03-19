<template>
  <div>
      {{actualTrackData.lyrics}}
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

<style>

</style>