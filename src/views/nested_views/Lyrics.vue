<template>
  <div class="main">
      <div class="wrapper">
        <div class="track-name">
          {{actualTrackData.name}}
        </div>
        <div class="lyrics">
          {{actualTrackData.lyrics}}
        </div>
      </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
    data () {
		return {
            actualTrackData: {}
        }   
    },
    mounted () {
    axios
      .get('http://api.geniusbutbetter:8081/tracks/' + this.$route.params.trackLink)
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
  padding-top: 1vh;
  padding-bottom: 2vh;
  font-family: 'Heebo';
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