<template>
  <div class="track" @click="$emit('click')">
    <span class="track-name">{{ track.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    track: Object,
  },
};
</script>

<style>
.track {
  height: 5vh;
  width: 100%;
  padding: 1vh;
  font-family: "Heebo";
  border-bottom: 1px solid white;
}

.track-name {
  display: block;
  padding: 1vh;
  /* text-align: center; */
}
</style>
