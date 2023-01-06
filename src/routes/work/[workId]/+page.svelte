<script>
	export let data;

	let { content, title, jetpack_featured_media_url } = data.projectData;
</script>

<div class="text">
	{@html content.rendered}
</div>
<div class="text">
	{title.rendered}
</div>
<img src={jetpack_featured_media_url} alt={title.rendered} />
