<template>
  <div class="album-page">
    <img class="album-page__vinyl-decorator" src="../assets/vinyl1x.png" />
    <Header @sidebar-change="$emit('sidebar-change', $event)" />

    <div class="album-page__info">
      <h3 class="album-page__heading">{{ album.name }}</h3>
      <p class="album-page__description">
        {{ album.descriptions && album.descriptions[0] }}
      </p>
    </div>

    <transition :name="transitionName">
      <router-view :album="album"> </router-view>
    </transition>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

import { getAlbum } from "../services/albumsService";

export default {
  components: {
    Header,
  },
  data() {
    return {
      album: {},
      transitionName: "slide-left",
    };
  },
  methods: {},
  async mounted() {
    this.$set(this, 'album', await getAlbum(this.albumId));
  },
  computed: {
    albumId() {
      return this.$route.params.id;
    },
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-left" : "slide-right";
    },
  },
};
</script>

<style lang="scss" scoped>
.album-page {
  $this: &; //.album-page

  max-height: 100vh;
  min-height: 100vh;
  background-size: 100vw;
  background-position: 0 46px;
  padding-top: 5vh;

  &__vinyl-decorator {
    animation: rotate 2s infinite linear;
    pointer-events: none;
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 0;
    margin-top: -50%;
  }

  &__info {
    margin: 0 5%;
    font-family: "Heebo";

    #{$this}__heading {
      font-size: 1.5rem;
      text-align: center;
    }

    #{$this}__description {
      padding: 0 3%;
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

/* animation slide 
this is a REAL mess but ill fix that some day
*/

.slide-right-leave-active {
  animation: about-left 0.5s;
}
.slide-right-enter-active {
  animation: about-right 0.5s;
}

/* slide right */

.slide-left-leave-active {
  animation: lyrics-right 0.5s;
}
.slide-left-enter-active {
  animation: lyrics-left 0.5s;
}

@keyframes about-left {
  from {
    margin-left: 0%;
  }
  to {
    margin-left: -100%;
  }
}

@keyframes about-right {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}

@keyframes lyrics-left {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
}

@keyframes lyrics-right {
  from {
    margin-left: 0%;
  }
  to {
    margin-left: 100%;
  }
}
</style>
