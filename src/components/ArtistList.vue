<template>
  <div class="artist-list">
	<ArtistTile
		v-for="(artist, i) in artists"
		:key="i"
		:artist = "artist"
	/>
  </div>
</template>

<script>
import ArtistTile from '../components/ArtistTile.vue'

const db = require("@/models/Artists.json");

export default {
    components: {
        ArtistTile,
    },
    data () {
		return {
			artists: db
		}
	},
}
</script>

<style>

.artist-list {

}

</style>