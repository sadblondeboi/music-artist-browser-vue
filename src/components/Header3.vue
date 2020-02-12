<template>
	<div class="header">
		<button class="btn-menu"></button>
	</div>
</template>

<script>
export default {
	name: "Header",
	methods: {
	goBack() {
		window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }	
  }
};
</script>

<style >
.header {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-bottom: 2vh;
	margin-left: 2vw;
    margin-right: 2vw;
	padding-top: 4vh;
}

button {
	border: none;
	padding: 20px 20px;
}	

.btn-menu {
	background: url(../assets/menu_icon.svg) no-repeat;
	background-position: center center;
}

</style>