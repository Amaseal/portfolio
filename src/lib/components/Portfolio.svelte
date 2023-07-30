<script lang="ts">
	import type { Portfolio } from '$lib/types';
	import MdiArrowRightBold from '~icons/mdi/arrow-right-bold';
	import PortfolioItem from './PortfolioItem.svelte';
	import { flip } from 'svelte/animate';
	import { receive } from '$lib/scripts/crosfade.js';
	export let portfolio: Portfolio[];

	let next = () => {
		let last = portfolio.pop() as Portfolio;
		portfolio = [last, ...portfolio];
	};
</script>

<section>
	<div class="container">
		<h2>Latest work:</h2>
	</div>
	<div class="container">
		<div class="wrapper">
			<div class="grid">
				{#each portfolio as post (post.slug)}
					<article in:receive={{ key: post.slug }} animate:flip={{ duration: 100 }}>
						<PortfolioItem {post} />
					</article>
				{/each}

				<button aria-label="next item" class="next" on:click={() => next()}>
					<MdiArrowRightBold />
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		width: min(100vw - ((100vw - 1200px) / 2), 100% - 3rem);
		display: inline-flex;
		justify-content: end;
	}
	.wrapper {
		position: relative;
		display: inline-flex;
		justify-content: end;
	}
	.grid {
		width: 1750px;
		display: grid;
		gap: var(--s-200);
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
	.next:hover {
		border: 2px solid var(--clr-primary);
	}
	.next {
		height: 60px;
		width: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--clr-primary);
		background-color: var(--clr-surface);
		outline: none;
		border: 1px solid var(--clr-surface);
		cursor: pointer;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		transition: all 0.15s ease;
		transform: translateY(-50%);
		right: -30px;
	}
	h2 {
		text-align: end;
		margin-bottom: var(--s-300);
	}

	section {
		padding: 88px 0;
	}
</style>
