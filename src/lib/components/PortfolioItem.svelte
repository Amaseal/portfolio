<script lang="ts">
	import { slide } from 'svelte/transition';

	import type { Portfolio } from '$lib/types';
	export let post: Portfolio;
	let hover = false;
</script>

<a
	aria-label={post.title}
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
	href="/portfolio/{post.slug}"
>
	<img src={post.featured} alt="" />
	{#if hover}
		<p class="title" transition:slide|local={{ duration: 150 }}>{post.title}</p>
	{/if}
</a>

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
		overflow: hidden;
	}
	a:hover > .title {
		display: block;
	}
	img {
		width: 100%;
		object-fit: cover;
		height: 350px;
		object-fit: cover;
		border-radius: var(--s-200);
	}
</style>
