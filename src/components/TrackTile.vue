<template>
  <div class="track">
      <div
        @click="routerChange(track.id)"
        :id="track.id">
            <span id="track-name">{{track.trackName}}</span>
      </div>
      
  </div>
</template>

<script>

export default {
    props: {
        track: Object
    },
    methods: {
        routerChange(newPath) {
            this.$router.push({
                path: `${this.$route.fullPath}/${newPath}`
            });
        },
    },
}
</script>

<style>
.track {
    height: 5vh;
    width: 100%;
    padding: 1vh;
    font-family: 'Heebo';
    border-bottom: 1px solid white;
}

#track-name {
    display: block;
    padding: 1vh;
    /* text-align: center; */
}

</style>