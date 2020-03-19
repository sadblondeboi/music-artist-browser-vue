<template>
  <div class="workpls">
  <section>
    <div class="vinyl-box">
      <img class="vinyl-img" src="../assets/vinyl1x.png">
    </div>
    <Header @sidebar-change="$emit('sidebar-change', $event)"/>  
    <Header2/>
    <div class="wrapper">
        <h2 class="albumName">{{actualAlbum.name}}</h2>
        <h3 class="albumReleaseYear">{{actualAlbum.realeaseDate}}</h3>
        <!-- <h3 class="longDescription">{{}}</h3> -->
        <TrackList/>
    </div>
  </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Header2 from '../components/Header2.vue';

import TrackList from '../components/TrackList.vue';
const axios = require('axios');

export default {

  components: {
    Header,
    Header2,
    TrackList
  },
  data () {
    return {
      actualAlbum: {}
    }
  },
  mounted () {
    axios
      .get('http://api.geniusbutbetter:8081/albums/' + this.$route.params.albumLink)
      // + this.$route.params.albumLink + '/tracks'
      .then(
        response => (this.actualAlbum = response.data)
        )
  }
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

}
section {
	width: 100vw;
  height: 100vh;

  overflow: hidden;
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