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


const axios = require('axios');


export default {
	components: {
		// ArtistTile,
		MenuButton,
		SearchBar,
		ArtistList
	},
	data () {
		return {
			artists: {}
		}
	},
	methods: {
		toggleMenu () {
			this.$emit('toggle-menu')
		},
	},
	mounted () {
		axios
			.get('http://api.geniusbutbetter:8081/artists')
			.then(response => (this.artists = response.data))
	}
}
</script>

<style scoped>

section {
	height: 100vh;
    width: 100vw;
}

.wrapper {
    margin-left: 6vw;
	margin-right: 6vw;
	display: grid;
	grid-template-rows: 2;
	justify-items: start;
	justify-content: left;
	
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