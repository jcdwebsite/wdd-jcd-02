<script>
	export let data;
	import Card from './blogCard.svelte';

	let content = [];

	data.blogData.forEach((element) => {
		let { excerpt, title, date, jetpack_featured_media_url } = element;
		content.push({ excerpt, title, date, jetpack_featured_media_url });
	});
	console.log(content);
</script>

<Card {content} />
