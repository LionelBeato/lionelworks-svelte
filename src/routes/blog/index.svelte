<script context="module">
	const posts = import.meta.glob('./posts/*.svx');

	console.log(posts);

	let body = [];

	for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
	}

	console.log(body);

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, params, fetch }) {
		const posts = await Promise.all(body);

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<main class="col-span-5 sm:col-start-2 sm:col-end-5 m-auto p-8">
	<ul>
		{#each posts as { title, outline, slug }}
			<article class="p-6">
				<a rel="prefetch" href="blog/posts/{slug}">
					<h2 class="text-3xl m-2 font-bold">
						{title}
					</h2>
					<p class="italic font-light">
						{outline}
					</p>
				</a>
			</article>
		{/each}
	</ul>
</main>
