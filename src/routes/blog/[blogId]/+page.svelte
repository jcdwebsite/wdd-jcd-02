<script>
	export let data;

	let { content, title, date, jetpack_featured_media_url } = data.blogData;
	let formattedDate = new Date(date);
</script>

<div class="bg-cyan-900 p-10">
	<div class="mb-3">
		<a
			href="/blog"
			class="text-lg text-orange-400 underline underline-offset-4 hover:underline-offset-1">Back</a
		>
	</div>
	<div class="mb-2 text-2xl font-bold tracking-tight text-cyan-300 dark:text-white">
		{@html title.rendered}
	</div>
	<div class="text-md text-cyan-500">{formattedDate.toLocaleDateString()}</div>
	<div class="text-md mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
		{@html content.rendered}
	</div>
	<img src={jetpack_featured_media_url} alt={title} />
</div>
