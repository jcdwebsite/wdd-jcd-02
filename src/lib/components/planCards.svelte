<script>
	// import { Card, Button } from 'flowbite-svelte';

	import Card from '$lib/components/card.svelte';
	import img1 from '$lib/images/IMG_0753.png';

	let title = 'Beautiful Modern Home';
	let tag = 'blog';
	let body =
		'1,200 Square foot two story home. Modern interior with architectural details on the exterior.';
	let date = '21 Dec 2022';
	let link = '/store';
	let image = img1;
	let altTitle = 'Test image';
	let price = '$500';
</script>

<div class="px-3 pb-6 flex justify-center gap-3">
	<Card {link} {altTitle} {image} {title} {body} {price} />
	<Card {link} {altTitle} {image} {title} {body} {price} />
	<Card {link} {altTitle} {image} {title} {body} {price} />
</div>
