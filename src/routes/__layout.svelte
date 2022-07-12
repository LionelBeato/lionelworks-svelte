<script>
	import '../app.css';
</script>

<div class="grid grid-cols-5 grid-rows-[1fr_auto_1fr]">
	<nav class="head flex items-center p-8 col-span-5">
		<a href="/"
			><img
				class="mr-4"
				src="../93c8cffd4e68e8b6ca34e6ac8d0c6d78.png"
				alt="A stylized L serving as a logo"
				style="height: 3rem;"
			/></a
		><a id="portfolio" href="/portfolio">portfolio</a>
		<div id="links" class="ml-auto">
			<a href="http://twitter.com/lionelbeato">
				<i class="fab fa-twitter fa-lg" aria-hidden="true" />
			</a>
			<a class="un" href="http://twitter.com/lionelbeato">Twitter</a>
			<a href="http://github.com/lionelbeato">
				<i class="fab fa-github fa-lg" aria-hidden="true" />
			</a>
			<a class="un" href="http://github.com/lionelbeato">GitHub</a><a
				href="http://linkedin.com/in/lionelbeato"
				><i class="fab fa-linkedin fa-lg" aria-hidden="true" /></a
			><a class="un" href="http://linkedin.com/in/lionelbeato">LinkedIn</a><a
				href="mailto:beato@lionel.works"><i class="fas fa-at fa-lg" aria-hidden="true" /></a
			><a class="un" href="mailto:beato@lionel.works">email</a>
		</div>
	</nav>
	<slot />
	<footer
		class="col-span-5 text-white text-xs text-center self-center p-5"
		style:position="absolute"
		style:bottom="0"
		style:width="100%"
		style:background="black"
	>
		<span>made with ❤️ in hartford, ct</span>
		<br />
		<span>Copyright © Lionel Beato 2020 <b>fd3sd-v1.0.35</b></span>
	</footer>
</div>

<style>
	#portfolio {
		color: white;
		padding: 0.3rem;
		background-color: black;
		font-weight: bold;
		font-family: 'IBM Plex Sans', sans-serif;
		text-transform: uppercase;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
		border: solid 2px black;
	}

	#portfolio:hover {
		background-color: yellow;
		color: black;
	}

	.head {
		/* height: 2rem; */
	}

	.head i,
	.head #portfolio {
		margin-right: 0.5rem;
	}

	.head .un {
		justify-content: center;
		margin-right: 1rem;
		color: black;
		font-family: 'IBM Plex Sans', sans-serif;
		text-transform: uppercase;
		text-decoration: none;
	}

	.un {
		position: relative;
	}

	.un:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: -10px;
		left: 0;
		background-color: black;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out;
	}

	@media only screen and (max-width: 700px) {
		.head .un {
			display: none;
		}
	}

	@media only screen and (max-width: 375px) {
		.head i {
			display: none;
		}
	}

	/* .foot {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		align-items: center;
		text-align: center;
		position: absolute;
		font-size: small;
		clear: both;
		bottom: 0;
		height: 3rem;
		min-width: 100%;
		background: black;
	} */

	.foot span {
		font-family: 'IBM Plex Mono';
		color: white;
	}
</style>
