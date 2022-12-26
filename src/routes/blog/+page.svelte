<script>
	import { Card, Button, Toggle } from 'flowbite-svelte';

	import img1 from '$lib/images/IMG_0753.png';

	let date = '21 Dec 2022';
</script>

<div class="p-10">
	<Card
		img={img1}
		href="/"
		horizontal
		reverse="true"
		class="bg-cyan-900 shadow-orange-300 border-none"
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-300 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<div class="text-md text-cyan-500">{date}</div>
		<p class="text-md mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
</div>
