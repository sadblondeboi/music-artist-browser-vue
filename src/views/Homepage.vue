<template>
<section>
	<div class="header">
		<MenuButton/> 
	</div>	
	<Sidebar/> 
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
import ArtistTile from '../components/ArtistTile.vue'
import MenuButton from "@/components/buttons/MenuButton.vue"
import Sidebar from "@/components/Sidebar.vue"

const db = require("@/models/Artists.json");

export default {
	components: {
		ArtistTile,
		MenuButton,
		Sidebar
	},
	data () {
		return {
			artists: db
		}
	},
	methods: {
		toggleMenu () {
			this.$emit('toggle-menu')
		},
		test () {
			this.toggleMenu();
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

section {
	height: 100vh;
	width: 100vw;
}

.header {
	margin-bottom: 2vh;
	margin-left: 2vw;
    margin-right: 2vw;
	padding-top: 4vh;
}


h2 {
	font-size: 36px;
}
h4 {
	font-weight: 400;
}
</style>