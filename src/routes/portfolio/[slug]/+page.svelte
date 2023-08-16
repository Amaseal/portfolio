<script lang="ts">
	import IcRoundLink from '~icons/ic/round-link';
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
	</div>
</section>

<section class="content">
	<div class="container">
		<div class="flow">
			<h1>{data.meta.title}</h1>
			<div class="flex gap">
				<p class="glob">{data.meta.client}</p>
				<a class="glob pointer" target="_blank" href={data.meta.link}> <IcRoundLink />Live site</a>
			</div>
			<svelte:component this={data.content} />
		</div>
	</div>
</section>

<style>
	.content {
		margin-top: -300px;
		padding-top: calc(88px + 300px);
		padding-bottom: 88px;
		background-color: var(--clr-surface);
	}
	.glob {
		background-color: var(--clr-background);
		padding: var(--s-100) var(--s-200);
		border-radius: var(--s-100);
		display: flex;
		gap: var(--s-100);
		align-items: center;
	}
	.pointer {
		cursor: pointer;
	}
	img {
		height: 500px;
		width: 100%;
		border-radius: var(--s-200);
		object-fit: cover;
	}
</style>
