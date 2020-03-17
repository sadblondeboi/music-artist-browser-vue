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
    styleBinding() {
      return {
        'background-image': `url(${this.artist.img})`,
        'background-position': '-230px -100px;',
        'background-color': 'white'
      };
    },
  }
}
</script>

<style scoped>
.main {
  padding: 14vw;
  font-size: 22px;
  color: black;
  text-shadow: 1px 1px 36px grey;
  max-width: 100vw;
}
</style>