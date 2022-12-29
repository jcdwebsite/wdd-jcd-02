<script>
	export let data;

	let { content, title, date, jetpack_featured_media_url } = data.blogData;
	console.log(data);
</script>

<div class="text-lg">{@html title.rendered}</div>
<div class="text-lg">{@html content.rendered}</div>
<div class="text-lg">{date}</div>
<img src={jetpack_featured_media_url} alt={title} />
