<template>
  <li class="list-element" @click="$emit('click')"> 
    <slot></slot>
    <slot name="right"></slot>
  </li>
</template>

<script>
export default {
  name: "ListElement",
};
</script>

<style lang="scss" scoped>
.list-element {
  margin: 0;
  padding: 0;
  font-weight: 700;
  padding: 1rem 0;
  border-bottom: 1px solid white;
}
</style>
