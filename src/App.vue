<script>
	// Components
	import Header from './components/Header.vue';
	import TopBanner from './components/TopBanner.vue';
	import Footer from './components/Footer.vue';

	export default {
		name: 'app',
		components: {
			Header,
			TopBanner,
			Footer
		}
	}
</script>

<template>
	<!DOCTYPE HTML>
	<html>
	<head>
		<title>VueJS 2 Playground</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
		<meta name="description" content=""/>
		<meta name="keywords" content=""/>
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
	</head>
	<body class="homepage">
	<div id="app">
		<Header></Header>
		<TopBanner></TopBanner>
		<router-view />
		<Footer></Footer>
	</div>
	</body>
	</html>
</template>

<style>
	body{min-width:960px}.container{margin-left:auto;margin-right:auto;width:960px}.container.small{width:720px}.container.big{width:100%;max-width:1200px;min-width:960px}
	html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}body{-webkit-text-size-adjust:none}
	.hidden {
		display: none;
	}
	body {
		margin: 0px;
		padding: 0px;
		background: #180E0B;
		font-family: 'Raleway', sans-serif;
		font-size: 11pt;
		color: #000000;
	}

	h1, h2, h3 {
		margin: 0px;
		padding: 0px;
	}

	h2 {
		padding: 0px 0px 20px 0px;
		letter-spacing: -1px;
		font-size: 1.8em;
	}

	p, ol, ul {
		margin-top: 0px;
		line-height: 160%;
	}

	p {
		margin-bottom: 2em;
		line-height: 160%;
	}

	strong {
		font-weight: 700;
	}

	a {
		color: #A2A2A2;
	}

	a:hover {
		text-decoration: none;
	}

	/* Images */

	.image {
		display: inline-block;
	}

	.image img {
		display: block;
		width: 100%;
	}

	.image.featured {
		display: block;
		width: 100%;
		margin: 0 0 2em 0;
	}

	.image.full {
		display: block;
		width: 100%;
		margin-bottom: 2em;
	}

	.image.left {
		float: left;
		margin: 0 2em 2em 0;
	}

	.image.centered {
		display: block;
		margin: 0 0 2em 0;
	}

	.image.centered img {
		margin: 0 auto;
		width: auto;
	}

	header {
		margin-bottom: 1em;
	}

	header h2 {
		font-weight: 600;
	}

	header .byline {
		display: block;
		margin: 0.5em 0 0 0;
		padding: 0 0 0.5em 0;
	}

	ul.style {
	}

	ul.style li {
		padding: 0.55em 0em;
	}

	ul.style li:first-child {
	}

	ul.style a {
		color: #774535 !important;
	}

	ul.style1 {
	}

	ul.style1 li {
		padding: 0.55em 0em;
	}

	ul.style1 li:first-child {
	}

	ul.style1 a {
		color: #774535 !important;
	}

	ul.style1 img {
		float: left;
		margin-right: 1em;
	}


	*, *:before, *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-o-box-sizing: border-box;
		-ms-box-sizing: border-box;
		box-sizing: border-box;
	}

	/* Container */

	body {
		min-width: 1200px;
	}

	.container {
		width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	/* Modifiers */

	.container.small {
		width: 900px;
	}

	.container.big {
		width: 100%;
		max-width: 1500px;
		min-width: 1200px;
	}

	/* Grid */

	/* Cells */

	.\31 2u { width: 100% }
	.\31 1u { width: 91.6666666667% }
	.\31 0u { width: 83.3333333333% }
	.\39 u { width: 75% }
	.\38 u { width: 66.6666666667% }
	.\37 u { width: 58.3333333333% }
	.\36 u { width: 50% }
	.\35 u { width: 41.6666666667% }
	.\34 u { width: 33.3333333333% }
	.\33 u { width: 25% }
	.\32 u { width: 16.6666666667% }
	.\31 u { width: 8.3333333333% }
	.\-11u { margin-left: 91.6666666667% }
	.\-10u { margin-left: 83.3333333333% }
	.\-9u { margin-left: 75% }
	.\-8u { margin-left: 66.6666666667% }
	.\-7u { margin-left: 58.3333333333% }
	.\-6u { margin-left: 50% }
	.\-5u { margin-left: 41.6666666667% }
	.\-4u { margin-left: 33.3333333333% }
	.\-3u { margin-left: 25% }
	.\-2u { margin-left: 16.6666666667% }
	.\-1u { margin-left: 8.3333333333% }

	.row > * {
		padding: 50px 0 0 50px;
		float: left;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-o-box-sizing: border-box;
		-ms-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row + .row > * {
		padding-top: 50px;
	}

	.row {
		margin-left: -50px;
	}

	/* Rows */

	.row:after {
		content: '';
		display: block;
		clear: both;
		height: 0;
	}

	.row:first-child > * {
		padding-top: 0;
	}

	.row > * {
		padding-top: 0;
	}

	/* Modifiers */

	/* Flush */

	.row.flush {
		margin-left: 0;
	}

	.row.flush > * {
		padding: 0 !important;
	}

	/* Quarter */

	.row.quarter > * {
		padding: 12.5px 0 0 12.5px;
	}

	.row.quarter + .row.quarter > * {
		padding-top: 12.5px;
	}

	.row.quarter {
		margin-left: -12.5px;
	}

	/* Half */

	.row.half > * {
		padding: 25px 0 0 25px;
	}

	.row.half + .row.half > * {
		padding-top: 25px;
	}

	.row.half {
		margin-left: -25px;
	}

	/* One and (a) Half */

	.row.oneandhalf > * {
		padding: 75px 0 0 75px;
	}

	.row.oneandhalf + .row.oneandhalf > * {
		padding-top: 75px;
	}

	.row.oneandhalf {
		margin-left: -75px;
	}

	/* Double */

	.row.double > * {
		padding: 100px 0 0 100px;
	}

	.row.double + .row.double > * {
		padding-top: 100px;
	}

	.row.double {
		margin-left: -100px;
	}
</style>
