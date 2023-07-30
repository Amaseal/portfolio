<script>
	import Dots from './Dots.svelte';
</script>

<section id="about">
	<div class="container">
		<div class="dots">
			<Dots count={140} width="200px" height="200px" />
		</div>
	</div>

	<div class="container flow">
		<h2>About me:</h2>
		<div class="flex justify">
			<div class="flow">
				<h3>Graphic design</h3>
				<p>
					I started my career in a typography, where i learned to love color. Eventually i honed my
					design skills and got some freelancing experience while designing various logos. This is
					when i found webflow and realized that i like web development more.
				</p>
			</div>
			<div class="flow">
				<h3>Web developemnt</h3>
				<p>
					Soon i realized webflow`s limitations and started to learn web development. I've finnished
					basic web development courses at Riga coding school where i learned basic js, php and
					laravel. Since then i found Svelte and SvelteKit and now build all my sites with these
					technologies.
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
	.flex > * {
		max-width: 45%;
	}
	.container {
		position: relative;
	}
	.dots {
		width: 45%;
		height: 400px;
		position: absolute;
		top: -350px;
		right: 0;
		overflow: hidden;
	}

	@media only screen and (max-width: 760px) {
		.flex {
			flex-direction: column;
			gap: 20px;
		}
		.flex > * {
			max-width: 100%;
		}
	}

	@media only screen and (max-width: 425px) {
		.dots {
			width: 30%;
		}
	}
</style>
