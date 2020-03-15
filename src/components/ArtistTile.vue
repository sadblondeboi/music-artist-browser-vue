<template>
  <div>
    <div class="main" 
    @click="routerChange(artist.link)" 
    :id="artist.name" 
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
      link: this.$route.params.link
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
        'background-image': `url(${this.imgLink})`
      };
    },
    imgLink() {
      return require("../assets/img/grechuta.jpg");
    }
  }
  
}
</script>

<style scoped>
.main {
  padding: 16vw;
  font-size: 20px;
}
</style>