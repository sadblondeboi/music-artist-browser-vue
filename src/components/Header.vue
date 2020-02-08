<template>
	<div class="header">
		<router-link to="/">
			<button class="btn-back" @click="$emit('transition-name', 'slide-down')"></button>
		</router-link>
		<button class="btn-menu"></button>
		<button class="btn-favourite"></button>

		<!-- <input type="image" alt="fu" src="../assets/img/back_button.png"/>
        <input type="image" alt="fu1" src="../assets/img/menu_button.png"/>
		<input type="image" alt="fu2" src="../assets/img/favourite_button.png"/>-->
	</div>
</template>

<script>
export default {
	name: "Header"
};
</script>

<style>
.header {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
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