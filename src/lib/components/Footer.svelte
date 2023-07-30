<footer>
	<div class="container">
		<div class="flex justify">
			<p>Arturs Jersovs &copy {new Date().getFullYear()}</p>
			<div class="flex gap">
				<a href="/portfolio">Portfolio</a>
				<a href="/blog">Blog</a>
				<a href="/#contacts">Contacts</a>
			</div>
		</div>
	</div>
</footer>

<style>
	a:hover {
		color: black;
		font-weight: 500;
	}
	p,
	a {
		color: var(--clr-background);
	}
	footer {
		background-color: var(--clr-primary);
		padding: 88px 0;
	}
</style>
