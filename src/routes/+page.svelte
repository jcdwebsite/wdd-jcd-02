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
	<StickyLayer rate={0}>
		<div class="bg-white mt-0">
			<FirstSection />
		</div>
	</StickyLayer>
	<StickyLayer onProgress={blurBackground} offset={{ top: 0, bottom: 1 }} rate={1}>
		<div style="filter:{opacityRate}" class="w-full h-full bg-cyan-900" />
	</StickyLayer>
	<ParallaxLayer rate={1} offset={1}>
		<SecondSection />
	</ParallaxLayer>
</Parallax>
