<script>
	import About from '$lib/components/About.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	export let data;
</script>

<Hero />
<About />
<Portfolio posts={data.posts} />
