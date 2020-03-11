<template>
	<div>
		<Sidebar>
			<ul class="sidebar-panel-nav">
				<li><a href="/">Homepage</a></li>
				<li><a href="/artist">Artist</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</Sidebar>
		<div class="header">
			<BackButton/>
			<MenuButton/>
			<button class="btn-favourite"></button>

			<!-- <input type="image" alt="fu" src="../assets/img/back_button.png"/>
			<input type="image" alt="fu1" src="../assets/img/menu_button.png"/>
			<input type="image" alt="fu2" src="../assets/img/favourite_button.png"/>-->
		</div>
	</div>
</template>

<script>
import MenuButton from "@/components/buttons/MenuButton.vue"
import BackButton from "@/components/buttons/BackButton.vue"
import Sidebar from "@/components/Sidebar.vue"

export default {
	name: "Header",
	components: {
		MenuButton,
		Sidebar,
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

.btn-back {
	background: url(../assets/back_icon.svg) no-repeat;
	background-position: center center;
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
}



</style>