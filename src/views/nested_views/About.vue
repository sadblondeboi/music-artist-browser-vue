<template>
  <div class="main">
    <div class="wrapper">
    <!-- <div class="album">
                <img class="album-cover" :src="this.actualAlbum.img">
                <div class="album-description"> 
                <h4>{{actualAlbum.name}}</h4> 
                <h5 class="release-date">{{actualAlbum.realeaseDate}}</h5>
                </div> 
            </div> -->
    <div class="album-info">
      <h3 >{{actualAlbum.name}} tracklist:</h3>

    </div>
    <TrackList/>
    </div>
  </div>
</template>

<script>
import TrackList from '../../components/TrackList.vue';
import { store } from "@/store.js";

export default {
    components: {
        TrackList
    },
    data () {
      return {
        actualAlbum: store.actualAlbum,
      }
    }
}
</script>

<style scoped>
.main {
  position: absolute;
  min-width: 100vw;
  max-width: 100vw;
}

/* .main .albumName {
	text-align: center;
	margin: auto;
  font-size: 32px;
}

.main .albumReleaseYear {
  text-align: center;
  font-weight: 500;
  font-family: LibreBaskeville;
} */

.wrapper {
  margin-left: 2vw;
	margin-right: 2vw;
}

.album-info {
  text-align: center;
}
.album {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: left right;
}

.album-description {
  text-align: center;
  justify-self: center;
  align-self: center;
}

.album-description h4, h5 {
  font-family: 'LibreBaskeville';
  font-weight: 300;
}

.album-description .release-date {
  color: rgba(101, 211, 230, 0.952)
}

img {
  width: 36vw;
  height: 36vw;
  padding: 1vh 1vh;  
}
</style>