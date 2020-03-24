<template>
  <div class="main">
      <img id='album-cover' :src="actualAlbum.albumImg">
      <div class="tracks">
        <!-- tu trzeba napisac ze to sa tracks of that album cos tam cos tam -->
        <TrackList/>
      </div> 
  </div>
</template>

<script>
import TrackList from '../../components/TrackList.vue';
const axios = require('axios');

export default {
    components: {
        TrackList,
    },
    data () {
      return {
        actualAlbum: {}
      }
    },
    mounted() {
    axios
      .get('http://api.geniusbutbetter:8081/albums/' + this.$route.params.albumLink)
      // + this.$route.params.albumLink + '/tracks'
      .then(
        response => (this.actualAlbum = response.data
        ))
    }
}
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