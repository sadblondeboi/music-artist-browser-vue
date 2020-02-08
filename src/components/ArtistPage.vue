<template>
  <section>
      <Header @transition-name="transitionNameEvent"/>  
      <h1> chuj </h1>
  </section>
</template>

<script>
import Header from './Header.vue';
export default {
  components: {
    Header
  },
  methods: {
      transitionNameEvent(event) {
          this.$emit("transition-name", event);
      }
  }
}
</script>

<style>   



</style>