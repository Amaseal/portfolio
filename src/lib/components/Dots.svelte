<script lang="ts">
	import { onMount } from 'svelte';

	export let count = 20;
	export let width;
	export let height;
</script>

<div class="flex" id="container">
	{#each Array(count) as _, i}
		<div class="dot" style="" />
	{/each}
</div>

<style>
	.dot {
		width: 20px;
		height: 20px;
		position: relative;
		background-color: var(--clr-primary);
		border-radius: 10px;
		transition: all 0.4s ease;
		pointer-events: none;
	}

	.flex {
		gap: 20px;
		display: flex;
		flex-wrap: wrap;
	}
</style>
