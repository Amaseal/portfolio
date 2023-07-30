<section>
	<div class="container flex justify">
		<h1>Trully fast web solutions</h1>
		<div>
			<p>I'm an enthusiastic web developer who is pasionate about web performance and UX.</p>
			<a href="/portfolio" class="button">My work</a>
		</div>
	</div>
	<div class="container-fluid">
		<img src="./images/background.webp" alt="laptop with code on screen" />
	</div>
</section>

<style>
	section {
		padding-top: 140px;
	}
	.flex > * {
		max-width: 45%;
	}
	p {
		margin-bottom: var(--s-500);
	}
	img {
		border-radius: var(--s-200);
		margin-top: 88px;
		height: 700px;
		width: 100%;
		object-fit: cover;
	}
	@media only screen and (max-width: 700px) {
		.flex {
			flex-direction: column;
		}
		.flex > * {
			max-width: 100%;
		}
	}
</style>
