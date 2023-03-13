<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<div class="site-title">
			<a href="/">Our Dystopia</a>
			<span>_Glossary</span>
		</div>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname.startsWith('/definitions') ? 'page' : undefined}>
				<a href="/definitions">Definitions</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/tags') ? 'page' : undefined}>
				<a href="/tags">Tags</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/user-entry') ? 'page' : undefined}>
				<a href="/user-entry">Contribute Entry</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

</header>

<style>
	header {
		display: flex;
		flex-direction:column-reverse;
		justify-content: space-between;
	}

	.corner {
		width:355px;
		margin:50px auto;
	}

	.corner a {
		display:block;
		width: 100%;
		height: 100%;
	}
	.corner a:hover {
		color: rgba(0,0,0,.7);
		text-decoration: none;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	.corner .site-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 3.5em;
		padding: 0px 10px;
	}
	.corner .site-title a{
		color: rgba(0,0,0,.7);
	}
	.corner .site-title span{
		font-size: .5em;
		color: rgba(0,0,0,.5);
		display:block;
		align-self:flex-end;
		margin-right: 20px;
	}

	nav {
		position: relative;
	
		display: flex;
		justify-content: center;
		--background: rgb(241, 241, 241);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	@media (min-width: 900px) {
		header {
			flex-direction:row;
		}
		nav {
			position:absolute;
			top: 0px;
			left: 50%;
			margin-left: -200px;
		}
		.corner{
			margin:0px;
			width:256px;
		}
		.corner .site-title {
			font-size: 2.5em;
		}
		.corner .site-title span{
			font-size: .5em;
			margin-right: 10px;
		}
	}
</style>
