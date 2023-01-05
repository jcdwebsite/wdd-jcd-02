<script>
	export let data;

	import { Card } from 'flowbite-svelte';

	let media = [];

	data.galleryData.forEach((element) => {
		let { title, guid } = element;
		media.push({ title, guid });
	});
</script>

<Card padding="none" size="xl" class="grid md:grid-cols-2 mx-auto">
	{#each media as { title, guid }}
		<figure
			class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
		>
			<img src={guid.rendered} alt={title.rendered} />
			<h3 class="py-4 text-lg font-semibold text-gray-900 dark:text-white">
				{title.rendered}
			</h3>
		</figure>
	{/each}
</Card>
