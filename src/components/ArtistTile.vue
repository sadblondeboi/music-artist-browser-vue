<template>
  <div>
    <div class="main" :id="artist.name" :style="styleBinding" >{{artist.name}}</div>
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

}
</style>