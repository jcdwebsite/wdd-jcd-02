<script>
	export let data;
	import Card from './blogCard.svelte';

	let content = [];

	data.blogData.forEach((element) => {
		let { excerpt, title, date, jetpack_featured_media_url, id } = element;
		content.push({ excerpt, title, date, jetpack_featured_media_url, id });
	});
</script>

<Card {content} />
