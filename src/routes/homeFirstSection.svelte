<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import logo from '$lib/graphics/logowithoutcircle.svg';

	let visible = false;
	onMount(() => (visible = true));
</script>

{#if visible}
	<div class="h-screen w-screen bg-svg ">
		<img
			transition:fly|local={{ y: -400, duration: 4000 }}
			src={logo}
			class="scale-[0.3] sm:scale-50 lg:scale-100 mx-auto"
			alt="Jose Cruz Designs logo"
		/>
		<h1
			transition:fly|local={{ y: -400, duration: 3000 }}
			class="sm:mb-10 text-lg md:text-2xl text-bold text-center text-orange-400"
		>
			Cruz Designs
		</h1>
		<div class="flex justify-evenly sm:mb-10">
			<h1
				transition:fly|local={{ y: -400, duration: 2000 }}
				class="text-sm sm:text-xl text-cyan-500"
			>
				Chicago
			</h1>
			<h1
				transition:fly|local={{ y: -400, duration: 1500 }}
				class="text-sm sm:text-xl text-cyan-500"
			>
				Southern California
			</h1>
			<h1
				transition:fly|local={{ y: -400, duration: 1000 }}
				class="text-sm sm:text-xl text-cyan-500"
			>
				Bay Area
			</h1>
		</div>
	</div>
{/if}

<style>
	.bg-svg {
		background-image: url('$lib/graphics/skylineOutline.svg');
		background-size: 160%;
		background-repeat: no-repeat;
		background-position-y: bottom;
	}

	/* Commented out section was the svg animation, need to find a better way to use this similar to the animations above */
	/* .path {
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		animation: dash 5s linear alternate infinite;
		animation: dash 5s linear alternate forwards;
		transform: scale(0.6);
	}  */
	/* 
	@keyframes background-image {
		from {
			stroke-dashoffset: 1;
		}
		to {
			stroke-dashoffset: 0;
		}
	} */
</style>
