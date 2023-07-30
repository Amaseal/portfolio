<script lang="ts">
	import type { Post } from '$lib/types';
	import Portfolio from './Portfolio.svelte';

	export let posts: Post[];
</script>

<section>
	<div class="container">
		<div class="flex large justify">
			<div class="flow">
				<h2>Latest blog posts</h2>
				<h3>
					Some of my latest blog posts, where i write some of my latest toughts and experiances
					while learning web dev.
				</h3>
			</div>

			{#each posts as post, i}
				<article>
					<a href="blog/{post.slug}">
						<div class="flex heading">
							<span>{i + 1}</span>
							<div class="line" />
							<h3>{post.title}</h3>
						</div>

						<p>{post.description}</p>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.flex > * {
		max-width: 45%;
	}
	article {
		width: 100%;
	}
	.line {
		height: 2px;
		width: 20px;
		margin-right: 20px;

		background-color: white;
	}
	.heading {
		align-items: center;
		justify-content: start;
	}
	p {
		margin-left: 90px;
	}
	span {
		width: 50px;
		height: 50px;
		display: grid;
		place-content: center;
		padding: var(--s-300);
		border: 2px solid white;
		border-radius: 50%;
	}

	section {
		padding: 88px 0;
	}

	@media only screen and (max-width: 760px) {
		.large {
			flex-direction: column;
			gap: var(--s-300);
		}
		.flex > * {
			max-width: 100%;
		}
	}
</style>
