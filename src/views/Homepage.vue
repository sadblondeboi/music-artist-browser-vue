<template>
<section>
	<div class="header">
		<MenuButton/> 
	</div>	
	<div class="wrapper">
		<h2>Explore</h2>
	</div>
	<SearchBar/>
	<ArtistList/>
</section>
</template>

<script>
import MenuButton from "@/components/buttons/MenuButton.vue"
import SearchBar from "@/components/SearchBar.vue"
import ArtistList from '@/components/ArtistList.vue'

const db = require("@/models/Artists.json");

export default {
	components: {
		// ArtistTile,
		MenuButton,
		SearchBar,
		ArtistList
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
	}
}
</script>

<style scoped>

.wrapper {
    margin-left: 6vw;
	margin-right: 6vw;
	display: grid;
	grid-template-rows: 2;
	justify-items: start;
	justify-content: left;
}

section {
	height: 100vh;
	width: 100vw;
}

.header {

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