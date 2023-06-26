<aside class="flow">
	<h4>Portfolio</h4>
	<nav class="flow">
		<ul class="flow">
			<li><a href="/admin/blog">Blog</a></li>
			<li><a href="/admin/portfolio">Portfolio</a></li>
		</ul>
	</nav>
	<form action="?logout">
		<button>Logout</button>
	</form>
</aside>

<style>
	nav {
		margin-block: auto;
	}
	aside {
		height: 100vh;
		width: 200px;
		background: var(--clr-surface);
		padding: var(--s-300);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h4 {
		color: var(--clr-primary);
	}
</style>
