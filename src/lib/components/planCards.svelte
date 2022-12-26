<script>
	import Card from '$lib/components/card.svelte';
	import Carousel from './carousel.svelte';

	import img1 from '$lib/images/IMG_0753.png';

	let title = 'Beautiful Modern Home';
	let tag = 'blog';
	let body =
		'1,200 Square foot two story home. Modern interior with architectural details on the exterior.';
	let date = '21 Dec 2022';
	let link = '/store';
	let image = img1;
	let altTitle = 'Test image';
	let price = 500;

	let screenWidth;

	let images = [
		{
			link: '/store',
			src: img1,
			title: 'Placeholder',
			body: 'This should be taken from a fetch request to the blog excerpt',
			price: `$${price}`
		},
		{
			link: '/store',
			src: img1,
			title: 'Placeholder',
			body: 'This should be taken from a fetch request to the blog excerpt',
			price: `$${price}`
		},
		{
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
		<Card {link} {image} {title} {body} {price} />
		<Card {link} {image} {title} {body} {price} />
		<Card {link} {image} {title} {body} {price} />
	</div>
{:else}
	<Carousel {images} />
{/if}
