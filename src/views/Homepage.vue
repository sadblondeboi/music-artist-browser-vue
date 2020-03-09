<template>
  <section>
  <header3/>
  <div class="wrapper">
    <h2>Explore</h2>
	<h4>tu będzie header ale mi sie go nie chce robic jeszcze</h4>
  </div>
  <div class="artist-list">
	<ArtistTile
		v-for="(artist, i) in artists"
		:key="i"
		:artist = "artist"
	/>
	
  </div>  
  </section>
</template>

<script>
import Header3 from '../components/Header3.vue'
import ArtistTile from '../components/ArtistTile.vue'

const db = require("@/models/Artists.json");

export default {
	components: {
		Header3,
		ArtistTile
	},
	data () {
		return {
			artists: db
		}
	}
}
</script>

<style scoped>

:root {
	--imgLink: 
}

.wrapper {
	margin-top: 4vh;
    margin-left: 6vw;
	margin-right: 6vw;
	display: grid;
	grid-template-rows: 2;
	justify-items: start;
}

section {
	height: 100vh;
	width: 100vw;
}

.artist-list {

}


h2 {
	font-size: 36px;
}
h4 {
	font-weight: 400;
}
</style>