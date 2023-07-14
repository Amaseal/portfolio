<script lang="ts">
	import type { Post } from '$lib/types';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { send, receive } from '$lib/scripts/crosfade.js';
	import MdiArrowRightBold from '~icons/mdi/arrow-right-bold';
	export let posts: Post[];

	let next = () => {
		let last = posts.pop() as Post;
		posts = [last, ...posts];
	};
</script>

<section>
	<div class="container">
		<h2>Latest work:</h2>
		<div class="flex">
			{#each posts as post (post.slug)}
				<a
					in:receive={{ key: post.slug }}
					animate:flip={{ duration: 100 }}
					href="/portfolio/{post.slug}"
				>
					<img src={post.featured} alt="" />
					<p class="title">{post.title}</p>
				</a>
			{/each}

			<button class="next" on:click={() => next()}> <MdiArrowRightBold /> </button>
		</div>
	</div>
</section>

<style>
	.title {
		display: none;
		position: absolute;
		bottom: 0;
		padding: var(--s-200);
		background-color: var(--clr-surface);
		width: 100%;
		border-bottom-left-radius: var(--s-200);
		border-bottom-right-radius: var(--s-200);
	}
	a {
		position: relative;
	}
	a:hover > .title {
		display: block;
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
		transform: translateY(-50%);
		right: -30px;
	}
	.flex {
		justify-content: end;
		margin-left: -600px;
		display: inline-flex;
		gap: var(--s-200);
		flex-basis: 40%;
		position: relative;
	}
	h2 {
		text-align: end;
		margin-bottom: var(--s-300);
	}

	section {
		padding: 88px 0;
	}
	img {
		height: 350px;
		width: 300px;
		object-fit: cover;
		border-radius: var(--s-200);
	}
</style>
