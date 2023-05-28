<script>
	const options = {
		"❤️": 10000,
		"🧡": 10000,
		"💜": 10000,
		"🤍": 10000,
		"💚": 10000,
		"💔": 5000,
		"🤓": 500,
		"😘": 500,
		"🙃": 500,
		"💩": 100,
		"🏳️‍🌈": 200,
		"🏳️‍⚧️": 200,
		"🇺🇦": 200,
		"🏴‍☠️": 200,
	}

	let emoji = "❤️";

	function pick_emoji() {
		const cumulativeWeights = Object.values(options).reduce((acc, val, idx) => {
			return acc + val;
		}, 0);

		const randomNumber = Math.floor(Math.random() * cumulativeWeights);

		let accumulatedWeight = 0;

		for (const k in options) {
			// @ts-ignore
			accumulatedWeight += options[k];

			if (accumulatedWeight >= randomNumber) {
				emoji = k;
				break;
			}
		}
	}


	import { onMount } from 'svelte';

	onMount(() => {
		for (const el of document.getElementsByClassName("random_emoji")) {
			// @ts-ignore
			el.style = "cursor: pointer;";
		}
		pick_emoji();
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span class="random_emoji" on:click={pick_emoji}>{emoji}</span>