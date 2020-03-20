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
        <transition :name="transitionName">
          <router-view> </router-view>
        </transition>
    </div>
  </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Header2 from '../components/Header2.vue';

const axios = require('axios');

export default {

  components: {
    Header,
    Header2,
  },
  data () {
    return {
      actualAlbum: {},
      transitionName: ""
    }
  },
  mounted () {
    axios
      .get('http://api.geniusbutbetter:8081/albums/' + this.$route.params.albumLink)
      // + this.$route.params.albumLink + '/tracks'
      .then(
        response => (this.actualAlbum = response.data)
        )
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-anim' : 'slide-left'
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
nalezy tu uzyc dynamicznego przypisywania klas i sprawdzania SKĄD I DOKĄD przenoszą się komponenty, aby animacja
była poprawna. Z View About obie animacje tak naprawdę są takie same, idą w LEWO: About.vue odchodzi w lewo, a Lyrics.vue 
w tej samej chwili wjeżdża od prawej strony, a w drugą stronę dokładnie odwrotnie
*/

.slide-anim-leave-active{
  animation: right .5s;
}
.slide-anim-enter-active{
  animation: left .5s;

}

@keyframes left{
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}

@keyframes right{
  from {
    margin-left: 0%;
  }
  to {
    margin-left: -100%;
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