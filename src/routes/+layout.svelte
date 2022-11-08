<script>
	import '../app.css';
	const version = VERSION.version;
</script>

<svelte:head>
	<!-- elements go here -->
	<title>Wow! Lionel's Very Own Website!</title>
	<meta name="Lionelworks"
		content="Homepage of all purpose technology professional Lionel Beato! Come say hello!"/>
</svelte:head>

<div class="grid grid-cols-5 grid-rows-[1fr_auto_1fr] wrapper">
	<nav class="head flex p-8 col-span-5">
		<a href="/"
			><img
				class="mr-4"
				src="../93c8cffd4e68e8b6ca34e6ac8d0c6d78.png"
				alt="A stylized L serving as a logo"
				style="height: 3rem;"
			/></a
		>
		<a id="portfolio" href="/portfolio" class="h-10">portfolio</a>
		<a id="portfolio" href="/blog" class="h-10">blog</a>
		<div id="links" class="ml-auto">
			<a href="https://mastodon.online/@lionel16">
				<i class="fab fa-mastodon fa-lg" aria-hidden="true" />
			</a>
			<a class="un" href="https://mastodon.online/@lionel16">Mastodon</a>
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
		<span>Copyright © Lionel Beato 2022 <b>{version}</b></span>
	</footer>
</div>

<style>
</style>
