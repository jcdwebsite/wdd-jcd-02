<script>
	export let data;

	let { content, title, jetpack_featured_media_url } = data.projectData;
</script>

<div class="h-screen w-auto bg-cyan-900 p-10">
	<div class="flex flex-col gap-5">
		<div class="text-cyan-300 text-3xl text-center mb-10">
			{title.rendered}
		</div>
		<div class="grid grid-cols-2 items-center gap-10">
			<div class="text-cyan-300 text-xl tracking-wide">
				{@html content.rendered}
			</div>
			<img src={jetpack_featured_media_url} alt={title.rendered} />
		</div>
	</div>
</div>
