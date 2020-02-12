<template>
    <div class="main">
        hej
    </div>
</template>

<script>
import Artists from '../models/Artists.js';
const object = new Artists();

export default {
    data () {
    return {
      sw: object.artists[0],
      link: object.artists[0].link
    }
  },
}
</script>

<style scoped>

.main {
    height: 20vh;
    width: 100vw;
}

</style>