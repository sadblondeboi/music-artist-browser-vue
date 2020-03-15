<template>
  <div class="header2">
      <button class="btn-about">About</button>
      <button class="btn-lyrics">Lyrics</button>
      <button class="btn-artist">{{this.actualArtist.name}}</button>
  </div>
</template>

<script>
const db = require("@/models/Artists.json");

export default {
    name: "Header2",
    data () {
    return {
      artists: db,
      actualArtist: {}	
    }
  },
  created () {
    this.actualArtist = (this.artists.find(artist => artist.link === this.$route.params.id));
  }
}
</script>

<style scoped>

.header2 {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-bottom: 2vh;
	margin-left: 2vw;
    margin-right: 2vw;
}

button {
    background: none;
    color: white;
}

button {
	border: none;
	padding: 20px 20px;
}

.btn-artist {
	justify-self: flex-end;
	margin-left: auto;
}

</style>