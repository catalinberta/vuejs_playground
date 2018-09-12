<template>
	<div v-if="showHeader" id="banner">&nbsp;</div>
</template>
<script>
	export default {
		computed: {
			showHeader() {
				return this.$store.state.app.showHeader;
			}
		}
	}
</script>
<style scoped>
	#banner
	{	padding: 15em 0;
		position: relative;
		background: #333 url(../assets/images/banner.jpg) no-repeat center;
		background-size: cover;
	}

	.homepage #banner
	{
	}
</style>