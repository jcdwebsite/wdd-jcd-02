<script>
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax';

	import SecondSection from './homeSecondSection.svelte';
	import FirstSection from './homeFirstSection.svelte';

	let opacityValue = 150;
	let opacityRate;
	const blurBackground = (progress) => {
		const p = progress;
		opacityRate = `opacity(${opacityValue * p}%)`;
	};
</script>

<Parallax config={{ stiffness: 1, damping: 1 }} threshold={{ top: 0, bottom: 0 }} sections={4}>
	<ParallaxLayer rate={-2}>
		<div class="mt-8">
			<FirstSection />
		</div>
	</ParallaxLayer>
	<StickyLayer onProgress={blurBackground} rate={1}>
		<div style="filter:{opacityRate}" class="w-full h-full bg-cyan-900" />
	</StickyLayer>
	<ParallaxLayer rate={1} offset={1}>
		<SecondSection />
	</ParallaxLayer>
</Parallax>
