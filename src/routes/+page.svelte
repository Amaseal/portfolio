<script>
	import About from '$lib/components/About.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Contacts from '$lib/components/Contacts.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	export let data;
</script>

<svelte:head>
	<title>Web development portfolio and blog.</title>
</svelte:head>

<Hero />
<About />
<Portfolio portfolio={data.portfolio} />
<Blog posts={data.posts} />
<Contacts />
