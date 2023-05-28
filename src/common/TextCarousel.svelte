<script lang="ts">
	import { to_number } from "svelte/internal";

	export let a: any = 0;
	a = to_number(a);

	console.log(a, typeof(a))

	

</script>

<div class="carousel-container">
	<slot/>
</div>

<style>
	:global(.carousel-container > *) {
		position: absolute;
		transition-property: opacity;
		transition-duration: 1s;
		transition-timing-function: ease-in-out;
	}
</style>