<template>
  <div>
    <div class="main" @click="routerChange('/Artist')" :id="artist.name" :style="styleBinding" >{{artist.name}} </div>
  </div>
</template>

<script>




export default {
  data () {
    return {

    }
  },
  props: {
    artist: Object
  },
  methods: {
    routerChange(path) {
      this.$router.push(path);
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