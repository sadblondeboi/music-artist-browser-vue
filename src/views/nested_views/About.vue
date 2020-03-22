<template>
  <div class="main">
    <img id='album-cover' src="https://payload.cargocollective.com/1/1/59240/12588837/camilo-medina-paul1.jpg" alt="">
    <div class="wrapper">
      <div class="album-info">
        <div class="album-name">
          <h3>{{actualAlbum.name}}</h3>
        </div> 
        <div class="album-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minus perspiciatis eum nemo aspernatur natus, dolorum quasi earum recusandae dolores vero quibusdam officia, qui iusto.
        </div>
      </div>
      <div class="tracks">
        <!-- tu trzeba napisac ze to sa tracks of that album cos tam cos tam -->
        <TrackList/>
      </div> 
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

.wrapper {
  margin-left: 5vw;
	margin-right: 5vw;
}

.tracks {
  margin-top: 2vh;
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

#album-cover {
  width: 80vw;
  padding: 2vw 5vw 0vw 10vw;
}

</style>