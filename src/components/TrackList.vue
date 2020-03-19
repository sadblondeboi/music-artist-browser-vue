<template>
    <div class="track-list">
        <TrackTile
        v-for="(track, i) in this.tracks"
        :key="i"
        :track = "track"
        />
    </div>
</template>

<script>
import TrackTile from '../components/TrackTile.vue'

const axios = require('axios');
export default {
    components: {
        TrackTile,
    },
    data () {
		return {
            tracks: {}
        }   
    },

    mounted () {
        axios
        .get('http://api.geniusbutbetter:8081/albums/' + this.$route.params.albumLink)
        // + this.$route.params.albumLink + '/tracks'
        .then(
            response => (this.tracks = response.data.tracks)
        )
    }

}
</script>

<style>
.track-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4vh;
} 
</style>