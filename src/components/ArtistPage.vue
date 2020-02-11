<template>
  <section>
    <Header/>  
    <Header2/>

    <div class="wrapper">
        <h2 class="albumName">{{this.object.albums[0].albumName}}</h2>
        <h3 class="albumReleaseYear">{{this.object.albums[0].albumReleaseYear}}</h3>
        <h3 class="longDescription">{{this.object.albums[0].longDescription}}</h3>
        <h3 class="longDescription2">{{this.object.albums[0].longDescription2}}</h3>
    </div>
  </section>
</template>

<script>
import Header from './Header.vue';
import Header2 from './Header2.vue';

import Artists from '../models/Artists.js';
const artists = new Artists();

export default {

  components: {
    Header,
    Header2
  },
  data () {
    return {
      object: artists
    }
  }
}
</script>

<style scoped>  

body {
  margin: unset;
  overflow: hidden;
}
section {
	min-height: 100vh;
  min-width: 100vw;
  background-image: url(../assets/vinyl1x.png);
  background-position: center;
  background-size: cover;
}


.wrapper {
	margin-left: 5%;
	margin-right: 5%;
  display: grid;

}

.wrapper .albumName {
	text-align: center;
	margin: auto;
  font-size: 32px;

}

.wrapper .albumReleaseYear {
  text-align: center;
  font-weight: 500;
  font-family: LibreBaskeville;
}

.wrapper .longDescription {
  font-weight: 500;
}

.wrapper .longDescription2 {
  font-weight: 500;
}
</style>