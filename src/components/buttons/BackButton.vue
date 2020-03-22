<template>
  <div class="back-button">
      <button class="btn-back" @click="goBack"></button>
  </div>
</template>

<script>
export default {
    name: "BackButton",
    methods: {
		goBack() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
	}, 
  }
}
</script>

<style scoped>

button {
	border: none;
}

.btn-back {
	background: url(../../assets/back_icon.svg) no-repeat;
	background-position: center center;
	padding-left: 4vh;
}

</style>