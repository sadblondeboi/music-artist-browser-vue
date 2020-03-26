<template>
    <div>
        <div class="main"
        @click="routerChange(album.id)" 
        :id="album.id" 
        :style="styleBinding"> 

            <div class="album">
                <img class="album-cover" :src="this.album.albumImg">
                <!-- :src="this.album.img" -->
                <!-- src="https://payload.cargocollective.com/1/1/59240/12588837/camilo-medina-paul1.jpg" -->
                <div class="album-description"> 
                <h4>{{album.albumName}}</h4> 
                <h5 class="release-date">{{album.realeaseDate}}</h5>
                <h5 class="release-date">1999/69/420</h5>
                </div> 
            </div>
        </div>      
    </div>
</template>

<script>
// const axios = require('axios');

export default {
    props: {
        album: Object
    },
    data () {
        return {
            link: this.$route.params.id,
            // test: {}
        }
    },
    methods: {
        routerChange(path) {
            this.$router.push({
                path: `/${this.link}/${path}`
            });
        }
    },
    computed: {
        styleBinding() {
            return {
                'img': `url(${this.album.img})`
            };
        },
    },
    // test pobierania coverów albumów z zewnętrznego API
    // created () {
	// 	axios
    //         .get('https://api.happi.dev/v1/music/cover/100694/artist')
    //         .then(
    //         response => (this.test = response.request.responseURL, console.log(this.test)))
    // }
}
</script>

<style scoped>
    .album {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: left right;
    }
    
    .album-description {
        align-self: center;
    }

    .album-description h4, h5 {
        font-family: 'Heebo';
        font-weight: 400;
        font-size: 1rem;
        margin: .0vh 1vh;
    }

    .album-description .release-date {
        color: rgba(101, 211, 230, 0.952)
    }

    .album-cover {
        width: 36vw;
        height: 36vw;
        padding: 1vh 2vh;
    }
</style>