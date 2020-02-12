<template>
  <div class="workpls">
  
  <section>
    <div class="vinyl-box">
      <img class="vinyl-img" src="../assets/vinyl1x.png">
    </div>
    <Header/>  
    <Header2/>
    <div class="wrapper">
        <h2 class="albumName">{{this.sw.albums[0].albumName}}</h2>
        <h3 class="albumReleaseYear">{{this.sw.albums[0].albumReleaseYear}}</h3>
        <h3 class="longDescription">{{this.sw.albums[0].longDescription}}</h3>
        <h3 class="longDescription2">{{this.sw.albums[0].longDescription2}}</h3>
    </div>
  </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Header2 from '../components/Header2.vue';

import Artists from '../models/Artists.js';
const object = new Artists();

export default {

  components: {
    Header,
    Header2
  },
  data () {
    return {
      sw: object.artists[0],
      link: object.artists[0].link
    }
  },
}
</script>

<style scoped>  

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

/*  */

@keyframes slide{
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}

@keyframes slide-leave{
  from {
    margin-right: 0%;
  }
  to {
    margin-right: 100%;
  }
}

body {
  margin: unset;
  overflow: hidden;
  height: 100%;

}
section {
	width: 100vw;
	min-height: 100vh;
  height: 100vh;
}

.workpls {
  display: grid;  
}

.vinyl-box {
  position: relative;
}

.vinyl-img {
  animation: rotate 2s infinite linear;
  pointer-events: none;
  position: absolute;
  z-index:-1;
  width: 100%;
  top: 0;
  margin-top: -50%;
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