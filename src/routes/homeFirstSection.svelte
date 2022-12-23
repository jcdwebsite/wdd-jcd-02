<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	// To Do:
	// The svg will animate in with the logo, then the screen will slide
	// needs to always fill the viewport
	import logo from '$lib/graphics/logowithoutcircle.svg';

	let visible = false;
	onMount(() => (visible = true));
</script>

<div class="container-none h-full w-full bg-svg ">
	<div class="p-10 md:p-60">
		{#if visible}
			<img
				transition:fly={{ y: -400, duration: 4000 }}
				class="scale-50 md:scale-100 mx-auto"
				src={logo}
				alt="Jose Cruz Designs logo"
			/>
			<h1
				transition:fly={{ y: -400, duration: 3000 }}
				class="mb-10 text-xl md:text-2xl text-bold text-center text-orange-400"
			>
				Architectural Designs
			</h1>
			<div class="block sm:flex sm:justify-evenly mb-10">
				<h1 transition:fly={{ y: -400, duration: 2000 }} class="text-lg md:text-xl text-cyan-500">
					Chicago
				</h1>
				<h1 transition:fly={{ y: -400, duration: 1500 }} class="text-lg md:text-xl text-cyan-500">
					Southern California
				</h1>
				<h1 transition:fly={{ y: -400, duration: 1000 }} class="text-lg md:text-xl text-cyan-500">
					Bay Area
				</h1>
			</div>
		{/if}
	</div>
</div>

<style>
	.bg-svg {
		background-image: url('$lib/graphics/skylineOutline.svg');
		background-size: 160%;
		background-repeat: no-repeat;
		background-position-y: bottom;
	}
	/* .centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	} */

	/* .centered-above {
		position: absolute;
		left: 50%;
		top: 60%;
		transform: translate(-50%, -50%);
	}

	.centered-below {
		gap: 2rem;
		position: absolute;
		left: 50%;
		top: 65%;
		transform: translate(-50%, -50%);
	} */
	/* .custom {
		max-width: 100%;
		overflow-x: hidden;
	}

	.path {
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		animation: dash 5s linear alternate infinite;
		animation: dash 5s linear alternate forwards;
		transform: scale(0.6);
	} */

	@keyframes background-image {
		from {
			stroke-dashoffset: 1;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
