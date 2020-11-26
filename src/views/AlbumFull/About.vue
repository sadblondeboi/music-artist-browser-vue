<template>
  <div class="album-about">
    <div class="album-about__vinyl-wrapper">
      <img class="album-about__vinyl" src="../../assets/vinyl1x.png" />
    </div>
    <div class="album-about__content">
      <div class="album-about__heading">
        <div class="album-about__name">{{ album.name }}</div>
        <div class="album-about__release-date">{{ album.releaseDate }}</div>
      </div>

      <div class="album-about__description">
        <p v-for="(description, i) in album.descriptions" :key="i">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumAbout",
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$vinyl-scale: 1.25;

.album-about {
  $this: &;

  &__vinyl-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    z-index: -1;

    #{$this}__vinyl {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;

      animation: rotate-vinyl linear 3.5s infinite;
    }

    &::after {
      display: block;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 10%,
        rgba(0, 0, 0, 0) 100%
      );
      top: 0;
      transform: scale(#{$vinyl-scale});
    }
  }

  &__content {
    #{$this}__heading {
      text-align: center;
      margin-bottom: 1.5rem;

      #{$this}__name {
        font-size: 1.375rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      #{$this}__release-date {
        opacity: 0.8;
      }
    }

    #{$this}__description {
      font-family: 'Libre Baskerville', serif;
      line-height: 1.5rem;
      letter-spacing: 0.2px;

      &::first-letter {
        float: left;
        font-size: 4.5rem;
        margin-right: .5rem;
        line-height: 1;
      }
    }
  }
  @keyframes rotate-vinyl {
    0% {
      transform: rotateZ(0deg) scale(#{$vinyl-scale});
    }
    100% {
      transform: rotateZ(360deg) scale(#{$vinyl-scale});
    }
  }
}
</style>
