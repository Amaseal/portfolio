<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import '../styles.css';
</script>

<Nav />
<slot><!-- optional fallback --></slot>
<Footer />
