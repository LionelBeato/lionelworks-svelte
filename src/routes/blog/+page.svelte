<script>
	export let data;
	console.log(`data exported`, data);
	import SvelteMarkdown from 'svelte-markdown'
	const posts = data.posts.reverse(); 
</script>

<main class="col-span-5 sm:col-start-2 sm:col-end-5 m-auto p-8">
	<ul>
		{#each posts as post}
			<article class="p-6">
				<a rel="prefetch" href="blog/{post.slug}">
					<h2 class="text-3xl my-2 font-bold">
						{post.title}
					</h2>
					<p class="italic font-light">
						{post.outline}
					</p>
				</a>
			</article>
		{/each}
	</ul>
</main>
