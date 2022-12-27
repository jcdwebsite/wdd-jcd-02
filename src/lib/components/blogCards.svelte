<script>
	import Card from '$lib/components/card.svelte';
	import Carousel from './carousel.svelte';

	import img1 from '$lib/images/IMG_0753.png';
	import img2 from '$lib/images/TrussFinish01.jpg';
	import img3 from '$lib/images/TrussFinish02.jpg';

	let content = [
		{
			title: 'Placeholder',
			src: img1,
			body: 'This should be taken from a fetch request to the blog excerpt',
			tag: 'Blog',
			date: '12 Dec 2022'
		},
		{
			title: 'Placeholder',
			src: img2,
			body: 'This should be taken from a fetch request to the blog excerpt',
			tag: 'Blog',
			date: '12 Dec 2022'
		},
		{
			title: 'Placeholder',
			src: img3,
			body: 'This should be taken from a fetch request to the blog excerpt',
			tag: 'Blog',
			date: '12 Dec 2022'
		}
	];
	let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth > 700}
	<div class="px-3 flex gap-4 justify-center">
		<Card {content} />
	</div>
{:else}
	<Carousel {content} />
{/if}
