<template>
  <div class="track">
      {{track.name}}
  </div>
</template>

<script>
export default {
    props: {
        track: Object
    }
}
</script>

<style>
.track {
    padding: 1vh;
}

</style>