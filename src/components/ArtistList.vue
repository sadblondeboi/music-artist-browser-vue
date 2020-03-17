<template>
  <div class="artist-list">
	<ArtistTile
		v-for="(artist, i) in this.artists"
		:key="i"
		:artist = "artist"
	/>
  </div>
</template>

<script>
import ArtistTile from '../components/ArtistTile.vue'

const axios = require('axios');

export default {
    components: {
        ArtistTile,
    },
    data () {
		return {
			artists: {}
		}
	},
	mounted () {
		axios
			.get('http://api.geniusbutbetter:8081/artists')
			.then(response => (this.artists = response.data))
	}
}
</script>

<style>

.artist-list {

}

</style>