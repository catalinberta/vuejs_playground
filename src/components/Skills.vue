<template>
	<div class="hello">
		{{name}}
		<button v-on:click="changeName" >Change name</button>
	</div>
</template>

<script>
	export default {
		name: 'Skills',
		data() {
			return {
				name: "name test"
			}
		},
		methods: {
			changeName: function()  {
				this.name = "test";
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
