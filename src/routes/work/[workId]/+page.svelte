<script>
	export let data;
	import { Img } from 'flowbite-svelte';

	let { content, title, jetpack_featured_media_url } = data.projectData;
</script>

<div class="bg-cyan-900 px-3 py-6">
	<div class="text-2xl sm:text-3xl text-cyan-300 text-center mb-6">
		{title.rendered}
	</div>
	<div class="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-10 items-center">
		<div class="text-lg sm:text-xl text-cyan-300 tracking-wide">
			{@html content.rendered}
		</div>
		<Img src={jetpack_featured_media_url} alt={title.rendered} />
	</div>
</div>
