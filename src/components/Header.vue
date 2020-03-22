<template>
	<div class="main">
		<div class="header">
			<BackButton/>
			<MenuButton/>
			<button class="test">Something something</button>
			<div class="logo"></div>
			<button class="btn-favourite"></button>
		</div>
	</div>
</template>

<script>
import MenuButton from "@/components/buttons/MenuButton.vue"
import BackButton from "@/components/buttons/BackButton.vue"

export default {
	name: "Header",
	components: {
		MenuButton,
		BackButton
	},
	methods: {
		goBack() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
	}	
  }
};
</script>

<style scoped>

.main {
	/* box-shadow: 0px 0px 4px .5px black; */
}

.header {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding-bottom: .5vh;
	padding-top: .5vh;
	background-color: rgba(15, 15, 15, 0.233);
}

.btn-menu {
	background: url(../assets/menu_icon.svg) no-repeat;
	background-position: center center;
}

.btn-favourite {
	justify-self: flex-end;
	margin-left: auto;
	background: url(../assets/favourite_icon.svg) no-repeat;
	background-position: center center;
	padding-right: 4vh;
}

.test {
	margin: auto;
	background: none;
	color: white;
	text-shadow: 0px 8px 14px black;
	font-size: 1rem;
	padding: 0;
}


</style>