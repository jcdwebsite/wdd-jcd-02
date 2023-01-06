<script>
	// This data var holds the data that was fetched in the +page.js file
	export let data;

	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax';

	import FirstSection from './homeFirstSection.svelte';
	import Card from '$lib/components/card.svelte';
	import Carousel from '../lib/components/carousel.svelte';
	import ProjectShowcase from '../lib/components/projectShowcase.svelte';
	import ContactCard from '../lib/components/contactCard.svelte';

	// This function creates the blur effect on the second stickylayer
	let opacityValue = 150;
	let opacityRate;
	const blurBackground = (progress) => {
		const p = progress;
		opacityRate = `opacity(${opacityValue * p}%)`;
	};

	// Screenwidth to create the responsiveness
	let screenWidth;

	// Destructuring data, in order of top to bottom of homepage
	let blogContent = [];

	data.blogData.forEach((element) => {
		let { excerpt, title, date, jetpack_featured_media_url, id } = element;
		blogContent.push({ excerpt, title, date, jetpack_featured_media_url, id });
	});

	// Description data
	let { content, title } = data.descriptionData[0];

	// Project showcase data
	let projectContent = [];

	data.projectData.forEach((element) => {
		let { title, excerpt, jetpack_featured_media_url, id } = element;
		projectContent.push({ title, excerpt, jetpack_featured_media_url, id });
	});
</script>

<svelte:window bind:innerWidth={screenWidth} />
<Parallax config={{ stiffness: 1, damping: 2 }} threshold={{ top: 0, bottom: 0 }} sections={5}>
	<StickyLayer rate={0}>
		<div class="bg-white mt-0">
			<FirstSection />
		</div>
	</StickyLayer>
	<StickyLayer onProgress={blurBackground} offset={{ top: 0, bottom: 1 }} rate={1}>
		<div style="filter:{opacityRate}" class="w-full h-full bg-cyan-900" />
	</StickyLayer>
	<ParallaxLayer rate={1} offset={1}>
		<div class="bg-cyan-900 sm:pb-40">
			<!-- Blog Card Section -->
			{#if screenWidth > 700}
				<div class="px-3 flex gap-4 justify-center">
					<Card content={blogContent} />
				</div>
			{:else}
				<Carousel content={blogContent} />
			{/if}
			<!-- Description section -->
			<div class="px-3 sm:px-[9%] xl:px-[20%] pt-20 sm:grid sm:grid-cols-6 text-left">
				<div class="mb-4 col-span-2 text-lg text-orange-400 font-semibold">
					<a
						href="/about"
						class=" underline underline-offset-8 hover:underline-offset-1 cursor-pointer"
					>
						{title.rendered}
					</a>
				</div>
				<div class="col-span-4 text-2xl sm:text-4xl text-cyan-300">
					{@html content.rendered}
				</div>
			</div>
			<ProjectShowcase content={projectContent} />
			<ContactCard />
		</div>
	</ParallaxLayer>
</Parallax>
