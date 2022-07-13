<script>
	import '../app.css';
</script>

<div class="grid grid-cols-5 grid-rows-[1fr_auto_1fr] wrapper">
	<nav class="head flex p-8 col-span-5">
		<a href="/"
			><img
				class="mr-4"
				src="../93c8cffd4e68e8b6ca34e6ac8d0c6d78.png"
				alt="A stylized L serving as a logo"
				style="height: 3rem;"
			/></a
		><a id="portfolio" href="/portfolio" class="h-10">portfolio</a>
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
	<footer class="foot col-span-5 text-white text-xs text-center self-center p-5">
		<span>made with ❤️ in hartford, ct</span>
		<br />
		<span>Copyright © Lionel Beato 2022 <b>v2.0.0</b></span>
	</footer>
</div>

<style>
</style>
