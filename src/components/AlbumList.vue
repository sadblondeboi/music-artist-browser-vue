<template>
  <div class="album-list">
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
}
</style>