<script>
    export let title
    export let date
    import SvelteMarkdown from 'svelte-markdown'
</script>
    
<main class="col-span-5 sm:col-start-2 sm:col-end-5 m-auto p-8">
    <h1>{title}</h1>
    <p><i>Published: {date}</i></p>

    <slot />
</main>