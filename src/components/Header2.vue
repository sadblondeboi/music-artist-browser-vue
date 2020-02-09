<template>
  <div class="header">
      <button class="btn-about" @click="test">About</button>
      <button class="btn-lyrics">Lyrics</button>
      <button class="btn-artist">{{}}</button>
  </div>
</template>

<script>
import Artists from '../models/Artists';

export default {
    name: "Header2",
    props: {
        artists: {
            type: Artists,
            required: true
        }
    },
    methods: {
        test() {
            console.log(this.artists.shortDescription);
        }
    }
}
</script>

<style scoped>

button {
    background: none;
    color: white;
}

/* .btn-about {

}

.btn-lyrics {

} */

.btn-artist {
	justify-self: flex-end;
	margin-left: auto;
}

</style>