import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/screens/Home.vue';
import AboutUs from './components/screens/AboutUs.vue';
import Services from './components/screens/Services.vue';
import Information from './components/screens/Information.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/about-us',
			name: 'HAboutUsome',
			component: AboutUs
		},
		{
			path: '/services',
			name: 'Services',
			component: Services
		},
		{
			path: '/information',
			name: 'Information',
			component: Information
		}
	]
});