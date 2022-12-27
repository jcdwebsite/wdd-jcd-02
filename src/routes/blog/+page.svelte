<script>
	import img1 from '$lib/images/IMG_0753.png';
	import Card from './blogCard.svelte';

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
			src: img1,
			body: 'This should be taken from a fetch request to the blog excerpt',
			tag: 'Blog',
			date: '12 Dec 2022'
		},
		{
			title: 'Placeholder',
			src: img1,
			body: 'This should be taken from a fetch request to the blog excerpt',
			tag: 'Blog',
			date: '12 Dec 2022'
		}
	];
</script>

<Card {content} />
