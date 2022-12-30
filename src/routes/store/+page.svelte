<script>
	export let data;

	console.log(data.storeData);

	import Card from './storeCard.svelte';
	import Card1 from '$lib/components/card.svelte';
	import Carousel from '../../lib/components/carousel.svelte';

	let content = [];
	data.storeData.forEach((element) => {
		let { excerpt, title, jetpack_featured_media_url, id } = element;
		content.push({ excerpt, title, jetpack_featured_media_url, id });
	});

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
