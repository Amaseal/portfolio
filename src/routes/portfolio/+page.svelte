<script>
	import PortfolioItem from '$lib/components/PortfolioItem.svelte';

	export let data;
</script>

<section>
	<div class="container">
		<div class="grid">
			{#each data.portfolio as post (post.slug)}
				<article>
					<PortfolioItem {post} />
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		padding-top: 44px;
		padding-bottom: 88px;
	}
	.grid {
		display: grid;
		gap: var(--s-100);
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
</style>
