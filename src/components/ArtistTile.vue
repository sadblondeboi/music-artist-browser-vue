<template>
  <div>
    <div class="main" 
    @click="routerChange(artist.id)" 
    :id="artist.id" 
    :style="styleBinding" >{{artist.name}}
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
      link: this.$route.params.name
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
    styleBinding() {
      return {
        'background-image': `url(${this.artist.img})`
      };
    },
    // imgLink() {
    //   return require("../assets/img/grechuta.jpg");
    // }
  }
  
}
</script>

<style scoped>
.main {
  padding: 14vw;
  font-size: 16px;
  color: black;
}
</style>