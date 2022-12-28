<script>
	export let data;
	import Card from './blogCard.svelte';

	let { excerpt, title, date, jetpack_featured_media_url } = data.blogData;
	console.log(data.blogData);
	let content = [
		{
			body: excerpt.rendered,
			title: title.rendered,
			date,
			src: jetpack_featured_media_url
		}
	];
</script>

<Card {content} />
