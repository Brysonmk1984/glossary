<script>
	import Header from '../lib/components/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; Our Dystopia 2023</p>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
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
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background-color: rgba(0,0,0,.7);
	}

	footer a {
		font-weight: bold;
		font-size: .8em;
		margin-bottom: .5em;
		color: rgba(255,255,255,.5);
	}
	footer a:hover{
		color: #ff3e00;
	}
	footer p{
		font-weight: bold !important;
		color: rgba(255,255,255,.5);
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
			
		}
	}
</style>
