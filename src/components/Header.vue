<template>
	<div id="header">
		<div class="container">
			<div id="logo">
				<h1><a href="#">autonomy</a></h1>
			</div>
			<nav id="nav">
				<ul>
					<li><router-link to="/">Home</router-link></li>
					<li><router-link to="/about-us">About Us</router-link></li>
					<li><router-link to="/services">Services</router-link></li>
					<li><router-link to="/information">Information</router-link></li>
				</ul>
			</nav>
			<div class="username">
				<div v-if="!username" class="login">
					<label for="username">Login: </label>
					<input v-on:change="login" type="text" id="username" placeholder="Username" v-bind:value="username" />
				</div>
				<div v-if="username" class="loggedIn">Welcome, <span>{{username}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data: () => {
			return {
				name: ''
			}
		},
		methods: {
			login: function(event) {
				this.$store.state.user.name = event.target.value;
			}
		},
		computed: {
			username() {
				return this.$store.state.user.name;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#header .username {
		position: absolute;
		top: 0;
		right: 0;
		margin: 15px 20px;
		color: #fff;
	}
	#header .username input {
		padding: 5px;
	}
	#header .username label {
		margin-right: 5px;
	}
	#header {
		position: relative;
	}

	#header .container {
		position: relative;
		padding: 6em 0em;
	}

	#logo {
		position: absolute;
		left: 0em;
		top: 4.5em;
	}

	#logo h1 {
		color: #FFF;
	}

	#logo a {
		display: block;
		text-decoration: none;
		font-size: 2.8em;
		font-weight: 600;
		color: #FFF;
	}

	#nav {
		position: absolute;
		right: 0em;
		top: 5em;
	}

	#nav > ul li {
		float: left;
	}

	#nav > ul li:last-child {
		padding-right: 0;
	}

	#nav > ul li a,
	#nav > ul li > span {
		display: block;
		margin-left: 0.7em;
		padding: 0.80em 1.2em;
		letter-spacing: 0.06em;
		text-decoration: none;
		font-size: 1em;
		outline: 0;
		color: #FFF;
		cursor: pointer;
	}

	#nav li a.router-link-exact-active {
		background: #56c9d6;
		border-radius: 5px;
		color: #FFF;
	}

	#nav > ul li ul {
		display: none;
	}
</style>
