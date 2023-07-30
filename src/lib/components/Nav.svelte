<header>
	<div class="container">
		<nav class="flex">
			<ul class="flex gap">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/portfolio">Portfolio</a>
				</li>
				<li>
					<a href="/#about">About</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
			</ul>
			<ul class="end">
				<li>
					<a href="/#contacts" class="button">Contacts</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		background-color: var(--clr-background);
		padding: var(--s-400) 0;
		z-index: 999;
	}
	ul {
		margin-left: auto;
	}
	ul:first-of-type {
		position: relative;
		left: calc(125px / 2);
	}
	@media only screen and (max-width: 700px) {
		ul:first-of-type {
			left: 0;
		}
	}
</style>
