<template>
	<section class="damn">
		<Header  @sidebar-change="$emit('sidebar-change', $event)"/>
		<img id='artist-photo' :src="actualArtist.artistImg">
		<div class="wrapper">
			<div class="about-author">
				<h2 class="author-name">{{this.actualArtist.artistName}}</h2>
				<h5 class="description-short">
					{{this.actualArtist.artistDescription}}
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


section {
	overflow: hidden;
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

