<script>
	import Card from '$lib/components/card.svelte';

	import img1 from '$lib/images/IMG_0753.png';
	import img2 from '$lib/images/TrussFinish01.jpg';
	import img3 from '$lib/images/TrussFinish02.jpg';

	let title = 'Noteworth architectural trends';
	let tag = 'blog';
	let body =
		'Here are the biggest enterprise technology acquisitions of 2021 so far, in reversechronological order.';
	let date = '21 Dec 2022';
	let link = '/blog';
</script>

<div class="px-3 flex gap-4 justify-center">
	<Card {link} {tag} image={img1} {title} {body} {date} />
	<Card {link} {tag} image={img2} {title} {body} {date} />
	<Card {link} {tag} image={img3} {title} {body} {date} />
	<!-- <Card img={img1} color={'none'} border={false}>
		<h5 class="mb-2 text-md font-bold tracking-tight text-cyan-300 dark:text-white">Blog</h5>
		<h5 class="mb-2 text-2xl font-bold  text-cyan-300 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<h5 class="mb-2 text-md tracking-tight text-cyan-200 dark:text-white">21 Dec 2022</h5>
	</Card>
	<Card img={img2} color={'none'} border={false}>
		<h5 class="mb-2 text-md font-bold tracking-tight text-cyan-300 dark:text-white">Blog</h5>
		<h5 class="mb-2 text-2xl font-bold t text-cyan-300 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<h5 class="mb-2 text-md  tracking-tight text-cyan-200 dark:text-white">21 Dec 2022</h5>
	</Card>
	<Card img={img3} color={'none'} border={false}>
		<h5 class="mb-2 text-md font-bold tracking-tight text-cyan-300 dark:text-white">Blog</h5>
		<h5 class="mb-2 text-2xl font-bold  text-cyan-300 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<h5 class="mb-2 text-md tracking-tight text-cyan-200 dark:text-white">21 Dec 2022</h5>
	</Card> -->
</div>
