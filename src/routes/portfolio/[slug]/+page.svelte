<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<section>
	<div class="container">
		<img src={data.meta.featured} alt="" />
		<h1>{data.meta.title}</h1>

		<div class="flow">
			<svelte:component this={data.content} />
		</div>
	</div>
</section>

<style>
	img {
		height: 500px;
		width: 100%;
		object-fit: cover;
	}
</style>
