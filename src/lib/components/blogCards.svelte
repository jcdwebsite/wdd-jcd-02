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
</div>
