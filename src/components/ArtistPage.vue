<template>
  <section>
      <Header/>  
      <Header2/>
  </section>
</template>

<script>
import Header from './Header.vue';
import Header2 from './Header2.vue';

import Artists from '../models/Artists';
export default {
  props: {
    artists: {
      type: Artists,
      required: true
    }
  },
  components: {
    Header,
    Header2
  },
  methods: {
  }
}
</script>

<style>   



</style>