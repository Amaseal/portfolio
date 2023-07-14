<script>
	import Dots from './Dots.svelte';
</script>

<section>
	<div class="container">
		<div class="dots">
			<Dots count={140} width="200px" height="200px" />
		</div>
	</div>

	<div class="container flow">
		<h2>About me:</h2>
		<div class="flex">
			<div class="flow">
				<h3>Early teens</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti architecto,
					accusamus repellat quibusdam velit quae voluptates dolor sequi, labore iure. Non quasi
					nemo culpa!
				</p>
			</div>
			<div class="flow">
				<h3>Recent</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti architecto,
					accusamus repellat quibusdam velit quae voluptates dolor sequi, labore iure. Non quasi
					nemo culpa!
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-color: var(--clr-surface);
		padding: 88px 0;
		padding-top: calc(88px + 300px);
		margin-top: -300px;
	}
	.flex {
		gap: 100px;
	}
	.container {
		position: relative;
	}
	.dots {
		width: 46%;
		height: 400px;
		position: absolute;
		top: -350px;
		right: 0;
	}
</style>
