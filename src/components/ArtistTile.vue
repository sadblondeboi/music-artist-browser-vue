<template>
  <div class="main">
    <div class="element" 
    @click="routerChange(artist.id)" 
    :id="artist.id" 
    :style="styleBinding" >
      <div>
       {{artist.name}}
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

  font-size: 22px;
  color: black;

}

.element {
  text-shadow: 1px 1px 36px grey;
  text-align: center;
  align-content: center;
  min-width: 100vw;
  padding: 6vh 0;
}
</style>