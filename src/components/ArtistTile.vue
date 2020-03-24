<template>
  <div class="main">
    <div class="tile" 
    @click="routerChange(artist.id)" 
    :id="artist.id">
      <!-- :style="styleBinding"  -->
      <img id="artist-pic" :src="artist.artistImg">
      <div id="artist-name">
        <h4>{{artist.artistName}}</h4>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artist: Object
  },
  data () {
    return {
      link: this.$route.params.id
    }
  },
  methods: {
    routerChange(path) {
      this.$router.push({
        path: `/${path}`
      });
    }
  },
  computed: {
    // styleBinding() {
    //   return {
    //     'background-image': `url(${this.artist.artistImg})`,
    //   };
    // },
  }
}
</script>

<style scoped>
.main {
  font-size: 22px;
  color: white;
}


.tile {
  text-shadow: 1px 1px 36px black;
  text-align: center;
  min-width: 100vw;


  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: left right;
}

img {
  width: 36vw;
  height: 36vw;
  padding: 1vh 2vh;
  border-radius: 50%;
}

.artist-name {
  grid-area: right;

  display: grid;
}

h4 {
  margin: 0 0 0 0;
  margin-top: 28%;
}
</style>