<template>
	<div id="copyright">
		<div class="container">
			Design: <a href="http://templated.co">TEMPLATED</a> Images: <a href="http://unsplash.com">Unsplash</a> (<a href="http://unsplash.com/cc0">CC0</a>)
		</div>
		<br>
		<div v-if="!username">Not logged in.</div>
		<div v-if="username">Logged in as: {{username}}</div>
		<br>
		<input v-model="showHeader" v-on:change="toggleHeader" id="showHeader" type="checkbox">
		<label for="showHeader">Show Header</label>
	</div>
</template>

<script>
	export default {
		computed: {
			username() {
				return this.$store.state.user.name;
			},
			showHeader() {
				return this.$store.state.app.showHeader;
			}
		},
		methods: {
			toggleHeader: function(event) {
				this.$store.state.app.showHeader = event.target.checked;
			}
		}
	}
</script>
<style scoped>
	#copyright
	{
		position: relative;
		padding: 3em 0em;
		text-align: center;
		color: #774535;
	}

	#copyright .container
	{
	}

	#copyright a
	{
		text-decoration: none;
		color: #774535 !important;
	}
</style>