<template>
	<section class="home-artist">
		<Header  @sidebar-change="$emit('sidebar-change', $event)"/>
		<div class="main-pic">
			<img class='artist-photo' :src="actualArtist.artistImg">
		</div>
		<div class="wrapper">
			<div class="about-author">
				<h2 class="author-name">{{this.actualArtist.artistName}}</h2>
				<h5 class="description-short">
					Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
					{{this.actualArtist.artistDescription}}
					
				</h5>
			</div>
		</div>
		<div class="album-list">
			<AlbumList/>
		</div>
	</section>
</template>

<script>
import Header from "../components/Header.vue";
import AlbumList from "../components/AlbumList.vue";

const axios = require('axios');
export default {
	components: {
		// Home,
		Header,
		AlbumList
	},
	data() {
		return {
			actualArtist: {},
		}			
	},
	methods: {
		routerChange(path) {
			this.$router.push({
				path: `/${this.actualArtist.id}/${path}`
			});
		},
	},
	created () {
		axios
			.get('http://api.geniusbutbetter:8081/artists/' + this.$route.params.id)
			.then(
				response => (this.actualArtist = response.data
			))
	},
	computed: {
		// styleBinding() {
		// 	return {
		// 		'background-image' : `url(${this.actualArtist.artistImg})`,
		// 		'background-repeat' : "no-repeat"
		// 	};
		// }
  }
};
</script>

<style scoped>

.home-artist {
	overflow: hidden;
}

.wrapper {
	margin-top: -28vh;
	margin-left: 4vw;
	margin-right: 4vw;
	display: grid;
	grid-template-rows: 2;
	justify-items: start;
	
	z-index: 11;
	position: relative;
}

.about-author .author-name {
	font-size: 46px;
	text-shadow: 1px 4px 16px black;
	margin-bottom: 1vh;
}
.about-author .description-short {
	margin-top: 0;
	font-size: 16px;
	font-family: 'Heebo';
	font-weight: 300;
}

.main-pic {
	display: grid;
}

.main-pic .artist-photo {
	z-index: -5;
	width: 100%;
} 

.album-list {
	z-index: 0;
	position: relative;
	box-shadow: 1vw 1vw 30vw 20vw black;
}

</style>

