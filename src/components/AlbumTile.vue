<template>
    <div>
        <div class="main"
        @click="routerChange(album.id)" 
        :id="album.id" 
        :style="styleBinding"> 

            <div class="album">
                <img class="album-cover" :src="this.album.img">
                <p class="album-name">{{album.name}}</p> 
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    props: {
        album: Object
    },
    data () {
        return {
            link: this.$route.params.id
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
                'img': `url(${this.album.img})`,

            };
        },
    }
}
</script>

<style scoped>
    .main {
        
    }
    
    .album {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: left right;

    }
    
    .album-name {
        text-align: center;
        justify-self: center;
        align-self: center;
    }

    img {
        width: 36vw;
        height: 36vw;
        padding: 1rem 1rem;
    }

</style>