<script lang="ts">
	import github_logo from "$lib/images/github-mark-white.svg"
	import gitlab_logo from "$lib/images/gitlab-logo-500.svg"

	import sandwich from "$lib/images/sandwich.webp"
	import bg_img from "$lib/images/space_scroll.webp"

	import { onMount } from "svelte";

	function easeInOutSine(x: number): number {
		return -(Math.cos(Math.PI * x) - 1) / 2;
	}

	onMount(() => {
		const bg = document.getElementById("bg");

		document.addEventListener('mousemove', function(event) {
			const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
			const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
			let m_y = event.clientY / vh;
			let m_x = event.clientX / vw;

			bg?.setAttribute("style", `background-image: url("${bg_img}"); background-position-y: ${easeInOutSine(m_y)*100}%; --offset: ${100 + (easeInOutSine(m_x) - .5)*2*70}vw`);
		});
	});

</script>

<!-- <svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head> -->

<section>
	<p id="coming-soon">
		Coming soon
	</p>
	<div id="links">
		<a href="https://github.com/S4NDW1CH" target="_blank"><img src={github_logo} alt="My GitHub profile" style="height: 60%; margin: auto"></a>
		<a href="https://gitlab.com/S4NDW1CH_" target="_blank"><img src={gitlab_logo} alt="My GitLab profile"></a>
	</div>
</section>

<div id="bg" style="background-image: url('{bg_img}');">
	<img id="bg_s" src={sandwich} alt="sandwich">
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: .9;
	}

	#coming-soon {
		text-transform: uppercase;
		font-size: 64pt;
		text-shadow: 5px 5px 15px #000;
		color: var(--color-text);
	}

	#links {
		width: 100%;
		color: var(--color-text);
		
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: center;
		gap: 3em;
	}

	#links > a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 6em;
		aspect-ratio: 1;
		border: 2px var(--color-theme-1) solid;
		background-color: var(--color-bg-1);
		border-radius: 8px;
		transition-duration: 300ms;
		box-shadow: 5px 5px 15px #000;
		padding: .5em;
	}

	#links > a:hover {
		background-color: var(--color-theme-1);
	}

	#links > a > img {
		height: 100%;
	}

	#bg {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		box-sizing: border-box;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		overflow: hidden;

		--offset: 100vw;

		background-size: 850%;
		background-position-x: right 100vw;
		background-position-y: 50%;

		animation-name: bg-slide;
		animation-duration: 60s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;

		opacity: 50%;

		/* background-color: red; */

		filter: saturate(5%) blur(18px);
		/* filter: url("../lib/images/filter.svg#noise"); */
	}

	@keyframes bg-slide {
		from {
			background-position-x: left;
		}

		to {
			background-position-x: right var(--offset);
		}
	}

	#bg_s {
		height: 30%;
		animation: 15s infinite linear speen;
	}

	@keyframes speen {
		from {
			rotate: 0deg;
		}

		to {
			rotate: 360deg;
		}
	}
</style>
