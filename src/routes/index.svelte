<script>
	import MyComponent from '../MyComponent.svelte';
	let name = 'world';
</script>

<main class="col-span-5 grid sm:grid-cols-2 m-auto p-8">
	<div class="col-auto">
		<img src="../face.png" class="w-96" />
	</div>
	<div class="col-auto article">
		<h1 class="title">Lionel Beato</h1>
		<hr />
		<article>
			<br />
			<ul class="list-disc p-4">
				<li>Neat guy</li>
				<li>Good at computer stuff</li>
				<li>Likes to draw sometimes</li>
			</ul>
			<p>
				<a href="https://drive.google.com/file/d/1tGTH15tK0C8iEFNbLzz44UTKGur-uiqK/view?usp=sharing"
					>Here is a link to my CV
				</a>. Feel free to take a look!
			</p>
		</article>
	</div>
</main>

<style>
	.hero > div {
		/* filter: drop-shadow(0 0 0.75rem crimson); */
	}

	.title {
		font-size: 2rem;
		text-transform: uppercase;
		font-family: 'IBM Plex Sans';
		font-weight: 900;
	}

	p > a {
		background-color: yellow;
		transition: all 250ms;
	}

	p > a:hover {
		background-color: black;
		color: white;
	}

	p,
	li {
		font-size: 1.2rem;
	}
</style>
