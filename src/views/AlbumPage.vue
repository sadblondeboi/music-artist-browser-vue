<template>
  <div class="workpls">
      <!-- <img class="vinyl-img" src="../assets/vinyl1x.png"> -->
    <Header @sidebar-change="$emit('sidebar-change', $event)"/>  
    <!-- <Header2/> -->

    <div class="wrapper">
      <div class="album-info">
        <div class="album-name">
          <!-- <h3>{{actualAlbum.name}}</h3> -->
        </div> 
        <div class="album-description">
       </div>
      </div>
    </div>
        <transition :name="transitionName">
          <router-view> </router-view>
        </transition>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

const axios = require('axios');

export default {

  components: {
    Header,
    // Header2,
  },
  data () {
    return {
      actualAlbum: {},
      transitionName: "slide-left",
    }
  },
  methods: {

  },
  mounted () {
    axios
      .get('http://api.geniusbutbetter:8081/albums/' + this.$route.params.albumLink)
      // + this.$route.params.albumLink + '/tracks'
      .then(
        response => (this.actualAlbum = response.data
        ))
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
    }
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

/* animation slide 
this is a REAL mess but ill fix that some day
*/

.slide-right-leave-active{
  animation: about-left .5s;
}
.slide-right-enter-active{
  animation: about-right .5s;
}

/* slide right */

.slide-left-leave-active{
  animation: lyrics-right .5s;
}
.slide-left-enter-active{
  animation: lyrics-left .5s;
}

@keyframes about-left{
  from {
    margin-left: 0%;
  }
  to {
    margin-left: -100%;
  }
}

@keyframes about-right{
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}

@keyframes lyrics-left{
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
}

@keyframes lyrics-right{
  from {
    margin-left: 0%;
  }
  to {
    margin-left: 100%;
  }
}


.workpls {
  max-height: 100vh;
  min-height: 100vh;
  background-size: 100vw;
  background-position: 0 46px;
  padding-top: 5vh;

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
  margin-left: 5vw;
	margin-right: 5vw;
}

.album-info {
  font-family: 'Heebo';
}

.album-name {
  font-size: 1.5rem;
  text-align: center;
}

.album-description {
  padding-left: 3vw;
  padding-right: 3vw;
}


</style>