<template>
  <div class="album-list">
    <div class="info">
      <!-- <h3>New releases:</h3> -->
      

    </div>
    <AlbumTile
        v-for="(album, i) in this.albumList"
        :key="i"
        :album = "album"
    />
  </div>
</template>

<script>
import AlbumTile from '../components/AlbumTile.vue'

const axios = require('axios');

export default {
    components: {
        AlbumTile,
    },
    data () {
		return {
            albumList: {},
            // zmienna albumData jest totalnie niepotrzebna, tylko do ulatwienia zebym widzial co jest 5
            albumData: {},
        }   
    },

    mounted () {
		axios
			.get('http://api.geniusbutbetter:8081/artists/' + this.$route.params.id)
			.then(
				response => (this.albumData = response.data, 
                this.albumList = this.albumData.albums
                ))
    }
}
</script>

<style>

.album-list {
  background-color: black;
  text-align: center;
  padding-bottom: 1vh;
}

.album-list h3 {
  font-family: 'PT Serif';
  /* font-weight: 300; */
}
</style>