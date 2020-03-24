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
    padding: 1vh;
    font-family: 'Heebo';
}

#track-name {
    display: block;
    border-bottom: 1px solid white;
}

</style>