<template>
	<section class="damn" :style="styleBinding">
		<Header  @sidebar-change="$emit('sidebar-change', $event)"/>
		<div class="wrapper">
			<div class="about-author">
				<h2 class="author-name">{{this.actualArtist.name}}</h2>
				<h5 class="description-short">
					{{this.actualArtistData.discription}}
				</h5>
			</div>
		</div>
		<div class="shadows">
			<AlbumList/>
		</div>
	</section>
</template>

<script>
import Header from "../components/Header.vue";
import AlbumList from "../components/AlbumList.vue";
import { mutations } from "@/store.js";

const axios = require('axios');
export default {
	components: {
		// Home,
		Header,
		AlbumList
	},
	data() {
		return {
			artists: {},
			actualArtist: {},
			actualArtistData: {},
		}			
	},
	methods: {
		routerChange(path) {
			this.$router.push({
				path: `/${this.actualArtist.id}/${path}`
			});
		},
		setActualArtist: mutations.setActualArtist,
	},
	created () {
		axios
			.get('http://api.geniusbutbetter:8081/artists')
			.then(
				response => (this.artists = response.data,
				this.actualArtist = this.artists.find(artist => artist.id === this.$route.params.id),
				this.setActualArtist(this.actualArtist)			
			))
	},
	mounted () {
		axios
			.get('http://api.geniusbutbetter:8081/artists/' + this.$route.params.id)
			.then(
				response => (this.actualArtistData = response.data
			))
	},
	computed: {
		styleBinding() {
			return {
				'background-image' : `url(${this.actualArtist.img})`,
				'background-repeat' : "no-repeat"
			};
		}
  }
};
</script>

<style scoped>
section {
	background-position: -200px 0px;
	overflow: hidden;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Heebo:300,400&display=swap');

section {

}

.wrapper {
	margin-top: 50vh;
	margin-left: 4vw;
	margin-right: 4vw;
	display: grid;
	grid-template-rows: 2;
	justify-items: start;
	height: 42vh;
}

.about-author {
	text-shadow: 1px 1px 12px black;
}

.about-author .author-name {
	/* font-size: 22px;  */
	margin: 0;
	margin-top: 4vh;
	font-size: 46px;
}
.about-author .description-short {
	font-size: 16px;
	font-family: 'Heebo';
	font-weight: 300;
}

.shadows {
	box-shadow: 0px -30px 100px 110px black;
}

</style>

