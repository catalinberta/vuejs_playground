<template>
	<div id="featured">
		<div class="container">
			<div class="row">

				<div class="3u">
					<section>
						<a href="#" class="image full"><img src="../../assets/images/pics02.jpg" alt=""></a>
						<header>
							<h2>Etiam posuere</h2>
						</header>
						<p>Pellentesque viverra vulputate enim. Aliquam erat volutpat. Pellentesque tristique ante. Sed vel tellus.</p>
					</section>
				</div>

				<div class="3u">
					<section>
						<a href="#" class="image full"><img src="../../assets/images/pics03.jpg" alt=""></a>
						<header>
							<h2>Fusce ultrices</h2>
						</header>
						<p>Pellentesque tristique ante. Sed vel tellus. Curabitur sem urna, consequat suscipit mattis placerat, nulla.</p>
					</section>
				</div>

				<div class="3u">
					<section>
						<a href="#" class="image full"><img src="../../assets/images/pics04.jpg" alt=""></a>
						<header>
							<h2>Donec dictum</h2>
						</header>
						<p>Pellentesque viverra vulputate enim. Aliquam erat volutpat. Curabitur sem urna, consequat mattis placerat, nulla.</p>
					</section>
				</div>

				<div class="3u">
					<section>
						<a href="#" class="image full"><img src="../../assets/images/pics05.jpg" alt=""></a>
						<header>
							<h2>Maecenas luctus</h2>
						</header>
						<p>Pellentesque viverra vulputate enim. Aliquam erat volutpat. Curabitur sem urna, consequat mattis placerat, nulla.</p>
					</section>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped>
	#featured
	{
		position: relative;
		padding: 6em 0em 4em 0em;
		background: #FFF;
	}

	.image
	{
		display: inline-block;
	}

	.image img
	{
		display: block;
		width: 100%;
	}

	.image.featured
	{
		display: block;
		width: 100%;
		margin: 0 0 2em 0;
	}

	.image.full
	{
		display: block;
		width: 100%;
		margin-bottom: 2em;
	}

	.image.left
	{
		float: left;
		margin: 0 2em 2em 0;
	}

	.image.centered
	{
		display: block;
		margin: 0 0 2em 0;
	}

	.image.centered img
	{
		margin: 0 auto;
		width: auto;
	}
	.row {
		margin-left: -50px;
	}

</style>