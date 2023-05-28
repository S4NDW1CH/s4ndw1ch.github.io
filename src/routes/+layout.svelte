<script>
	import Header from './Header.svelte';
	import './styles.css';

	import svelte_logo from '$lib/images/svelte-logo.svg';
	import RandomEmoji from '../common/RandomEmoji.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Made with <RandomEmoji/> and <a href="https://kit.svelte.dev" style="color: #ff3e00;"><img src={svelte_logo} alt="Svelte logo." style="display: inline; height: 1rem; padding: 0 0.3rem;">Svelte</a></p>
		<p>|</p>
		<p><a href="mailto:a.pol@s4ndw1ch.xyz">a.pol@s4ndw1ch.xyz</a></p>
		<p>|</p>
		<p>Andrey Polischuk 2023</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 96rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
