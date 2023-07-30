<script lang="ts">
	export let data;
</script>

<section>
	<div class="container">
		{#each data.posts as post, i}
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
</style>
