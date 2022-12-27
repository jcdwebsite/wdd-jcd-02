<script>
	import Card from './storeCard.svelte';
	import Card1 from '$lib/components/card.svelte';
	import Carousel from '../../lib/components/carousel.svelte';
	import img1 from '$lib/images/IMG_0753.png';

	let content = [
		{
			type: 'plan',
			title: 'Placeholder',
			src: img1,
			body: 'This should be taken from a fetch request to the blog excerpt',
			price: '$500'
		},
		{
			type: 'plan',
			title: 'Placeholder',
			src: img1,
			body: 'This should be taken from a fetch request to the blog excerpt',
			price: '$500'
		},
		{
			type: 'plan',
			title: 'Placeholder',
			src: img1,
			body: 'This should be taken from a fetch request to the blog excerpt',
			tag: 'Blog',
			price: '$500'
		}
	];

	let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<div class="bg-cyan-900 py-40 px-3">
	<div class="text-2xl text-cyan-300 text-center pb-10">
		Buy plans for a beautiful modern home with custom or standard interiors!
	</div>
	{#if screenWidth > 700}
		<div class="flex gap-4 pb-10">
			<Card1 {content} />
		</div>
	{:else}
		<Carousel {content} />
	{/if}
	<Card {content} />
</div>
