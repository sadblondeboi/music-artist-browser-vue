<template>
  <section>
      <Header/>  
      <h1> chuj </h1>
  </section>
</template>

<script>
import Header from './Header.vue';
export default {
  components: {
    Header
  },
  beforeRouteUpdate (to, from, next) {
    console.log('chuj');
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide' : 'slide2'
    next()
  }
}
</script>

<style>   



</style>