<script>
	import MdiFacebook from '~icons/mdi/facebook';
	import MdiPhone from '~icons/mdi/phone';
	import MdiEmail from '~icons/mdi/email';
	import MdiTelegram from '~icons/mdi/telegram';
</script>

<section id="contacts">
	<div class="container">
		<div class="flex large">
			<div class="flow">
				<h2>Send me a message:</h2>
				<h3>
					For bussiness inquires, or maybe you have a question about some of my work or blog posts
				</h3>
			</div>
			<div>
				<ul>
					<!-- <li class="flex align gap">
						<div class="icon flex">
							<MdiFacebook />
						</div>
						<a target="_blank" href="https://facebook.com/arturs.jersovs">arturs.jersovs</a>
					</li> -->
					<li class="flex align gap">
						<div class="icon flex">
							<MdiPhone />
						</div>
						<a target="_blank" href="tel:+37129412679">+371 29412679</a>
					</li>
					<li class="flex align gap">
						<div class="icon flex">
							<MdiEmail />
						</div>
						<a target="_blank" href="mailto:freelnace.jershov@gmail.com"
							>freelnace.jershov@gmail.com</a
						>
					</li>
					<li class="flex align gap">
						<div class="icon flex">
							<MdiTelegram />
						</div>
						<a target="_blank" href="https://t.me/ArtursJersovs">@ArtursJersovs</a>
					</li>
				</ul>
			</div>
			<form
				name="contact"
				method="POST"
				action="/success"
				netlify
				class="flow"
				netlify-honeypot="bot-field"
			>
				<input type="hidden" name="form-name" value="contact" />
				<div class="flex gap inputs">
					<label for="name"
						>Name
						<input type="text" name="name" id="name" />
					</label>
					<label for="email"
						>E-mail
						<input type="email" name="email" id="email" />
					</label>
				</div>
				<label for="message">
					Message
					<textarea name="message" cols="30" rows="5" id="message" />
				</label>

				<button class="button">Send</button>
			</form>
		</div>
	</div>
</section>

<style>
	.large {
		gap: 100px;
	}

	li {
		margin-bottom: var(--s-200);
	}
	section {
		padding: 88px 0;
		background-color: var(--clr-surface);
	}
	textarea {
		padding: var(--s-100) var(--s-200);
		border: 2px solid var(--clr-primary);
		background: transparent;
		color: var(--clr-primary);
		width: 100%;
	}

	.icon {
		padding: var(--s-100);
		border-radius: 50%;
		color: var(--clr-primary);
		border: 2px solid var(--clr-primary);
	}

	@media only screen and (max-width: 1200px) {
		.inputs {
			flex-direction: column;
		}
	}
	@media only screen and (max-width: 940px) {
		.large {
			gap: 20px;
		}
	}
	@media only screen and (max-width: 760px) {
		.large {
			flex-direction: column;
		}
	}
</style>
