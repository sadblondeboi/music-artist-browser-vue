<template>
	<section class="damn" :style="styleBinding">
		<Header  @sidebar-change="$emit('sidebar-change', $event)"/>
		<div class="wrapper">
			<div class="about-author">
				<h2 class="author-name">{{this.actualArtist.name}}</h2>
				<h5 class="description-short">
					<!-- {{this.actualArtist.shortDescription}} -->
				</h5>
			</div>

			<div class="see-more">
				<!-- <h5 class="release-year">{{this.actualArtist.albums[0].albumReleaseYear}}</h5> -->
					<!-- <button class="btn-more" @click="routerChange(actualArtist.albums[0].albumLink)">See more</button> -->
			</div>
		</div>
	</section>
</template>

<script>
import Header from "../components/Header.vue";
const axios = require('axios');
export default {
	components: {
		// Home,
		Header,
	},
	data() {
		return {
			artists: {},
			actualArtist: {},
			albumData: {},
			albumsList: {}
			}			
	},
	created () {
		axios
			.get('http://api.geniusbutbetter:8081/artists')
			.then(
				response => (this.artists = response.data,
				this.actualArtist = (this.artists.find(artist => artist.id === this.$route.params.id))
			))
	},
	mounted () {
		axios
			.get('http://api.geniusbutbetter:8081/artists/' + this.$route.params.id)
			.then(
				response => (this.albumData = response.data, 
				this.albumsList = this.albumData.albums
				))
	},
	methods: {
	routerChange(path) {
		this.$router.push({
		path: `/${this.actualArtist.id}/${path}`
      });
	},
	},
	computed: {
		styleBinding() {
			return {
				'background-image': `url(${this.actualArtist.img})`
			};
		}
  }
};
</script>

<style scoped>
section {
	background: url("../assets/img/BG.png") no-repeat;
	background-position: -40px -140px;
	background-attachment: fixed;
	
}
</style>

<style scoped>
section {
	width: 100vw;
	min-height: 100vh;
}

.wrapper {
	margin-top: 50vh;
	margin-left: 4vw;
	margin-right: 4vw;
	display: grid;
	grid-template-rows: 2;
	justify-items: start;
}

.about-author .author-name {
	/* font-size: 22px;
	font-family: PTSerif; */
	margin: 0;
	font-size: 46px;
	margin: 0;
}
.about-author .description-short {

}

.see-more {
	align-self: center;
	text-align: center;
	margin: auto;
}

.see-more h5 {
	margin-bottom: 5%;
}

.btn-more {
	background: url(../assets/see_more_icon.svg) no-repeat;
	background-position: bottom center;
	height: 70px;
	width: 100px;
	color: white;
}
</style>

