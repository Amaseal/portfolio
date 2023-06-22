<script lang="ts">
	import { enhance } from '$app/forms';

	export let form: { message?: string; success?: boolean };
</script>

<section class="flow">
	<form method="post" class="flow" use:enhance>
		<h4>admin</h4>
		<label for="username">
			Username
			<input type="text" name="username" id="username" />
		</label>
		<label for="password">
			Password
			<input type="password" autocomplete="off" name="password" id="password" />
		</label>
		<button type="submit">Register</button>
		{#if form?.message}
			<p class="error">{form.message || ''}</p>
		{/if}
		{#if form?.success}
			<p>success</p>
		{/if}
	</form>
</section>

<style>
	section {
		min-height: 100vh;
		min-height: 100dvh;
		display: grid;
		place-items: center;
	}

	form {
		background-color: var(--clr-surface);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--s-400);
	}
</style>
