<template>
  <div class="search-bar">
    <input
      class="search-bar__input"
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    value: {
      required: false,
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/styles";

.search-bar {
  &__input {
    background-color: unset;
    width: 100%;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    border: unset;
    padding-bottom: 1em;
    border-bottom: 1px solid white;
    margin-bottom: 0.75em;
    color: white;
    font-weight: 500;
    outline: none;
  }
}
</style>
