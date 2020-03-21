<template>
  <div class="main">
    <TrackList/>
  </div>
</template>

<script>
import TrackList from '../../components/TrackList.vue';

export default {
    components: {
        TrackList
    }
}
</script>

<style scoped>
.main {
  position: absolute;
  min-width: 100vw;
  max-width: 100vw;
}
</style>