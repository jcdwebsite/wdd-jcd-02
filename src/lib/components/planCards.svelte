<script>
	import Card from '$lib/components/card.svelte';
	import Carousel from './carousel.svelte';

	import img1 from '$lib/images/IMG_0753.png';

	let price = 500;

	let screenWidth;

	let content = [
		{
			type: 'plan',
			link: '/store',
			src: img1,
			title: 'Placeholder',
			body: 'This should be taken from a fetch request to the blog excerpt',
			price: `$${price}`
		},
		{
			type: 'plan',
			link: '/store',
			src: img1,
			title: 'Placeholder',
			body: 'This should be taken from a fetch request to the blog excerpt',
			price: `$${price}`
		},
		{
			type: 'plan',
			link: '/store',
			src: img1,
			title: 'Placeholder',
			body: 'This should be taken from a fetch request to the blog excerpt',
			price: `$${price}`
		}
	];
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth > 700}
	<div class="px-3 pb-6 flex justify-center gap-3">
		<Card {content} />
	</div>
{:else}
	<Carousel {content} />
{/if}
