<template>
	<section class="damn">
		<Header  @sidebar-change="$emit('sidebar-change', $event)"/>
		<div class="wrapper">
			<div class="about-author">
				<h4 class="author-name">{{this.actualArtist.name}}</h4>
				<h2 class="album-name">{{this.actualArtist.albums[0].albumName}}</h2>
				<h5 class="description-short">
					{{this.actualArtist.albums[0].shortDescription}}
				</h5>
			</div>

			<div class="see-more">
				<h5 class="release-year">{{this.actualArtist.albums[0].albumReleaseYear}}</h5>
					<button class="btn-more" @click="routerChange(actualArtist.albums[0].albumLink)">See more</button>
			</div>
		</div>
	</section>
</template>

<script>
import Header from "../components/Header.vue";
const db = require("@/models/Artists.json");

export default {
	components: {
		// Home,
		Header,
	},
	data() {
		return {
			artists: db,
			actualArtist: {}			
		};
	},
	created () {
		this.actualArtist = (this.artists.find(artist => artist.link === this.$route.params.id));
	},
	methods: {
	routerChange(path) {
		this.$router.push({
		path: `/${this.actualArtist.link}/${path}`
      });
    }
	},
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
	font-size: 22px;
	font-family: PTSerif;
	margin: 0;
}
.about-author .album-name {
	font-size: 46px;
	margin: 0;
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

