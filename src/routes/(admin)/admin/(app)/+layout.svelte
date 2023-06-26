<script>
	import Nav from '$lib/components/admin/Nav.svelte';
	import '../../../../styles.css';
</script>

<div class="flex">
	<Nav />
	<div class="content">
		<slot><!-- optional fallback --></slot>
	</div>
</div>

<style>
	.content {
		padding: var(--s-300);
	}
</style>
