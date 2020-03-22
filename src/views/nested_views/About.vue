<template>
  <div class="main">
    <div class="wrapper">
    <h2 class="albumName">{{actualAlbum.name}}</h2>
    <h3 class="albumReleaseYear">{{actualAlbum.realeaseDate}}</h3>
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

.main .albumName {
	text-align: center;
	margin: auto;
  font-size: 32px;

}

.main .albumReleaseYear {
  text-align: center;
  font-weight: 500;
  font-family: LibreBaskeville;
}

.wrapper {
  margin-left: 2vw;
	margin-right: 2vw;
}
</style>