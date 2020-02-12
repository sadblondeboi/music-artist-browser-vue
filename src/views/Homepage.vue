<template>
  <section>
  <header3/>
  <div class="wrapper">
    <h2>Explore</h2>
	<h4>tu będzie header ale mi sie go nie chce robic jeszcze</h4>
  </div>
  <div class="artist-list">
	<ArtistTile
		v-for="artist in artists"
		v-bind:key = "artist.id"
	
	/>
	
  </div>
        <!-- <GameTile  v-on:tile-captured="winChecker" class="tile" v-for="(tile, i) in tiles" :key="i" :tileData="tile"/>  -->
   
  </section>
</template>

<script>
import Header3 from '../components/Header3.vue'
import ArtistTile from '../components/ArtistTile.vue'
import Artists from '../models/Artists.js';
const object = new Artists();


export default {
	components: {
		Header3,
		ArtistTile
	},
	data () {
		return {
			artists: object
		}
	}
}
</script>

<style scoped>
.wrapper {
	margin-top: 4vh;
    margin-left: 6vw;
	margin-right: 6vw;
	display: grid;
	grid-template-rows: 2;
	justify-items: start;
}

h2 {
	font-size: 36px;
}
h4 {
	font-weight: 400;
}
</style>