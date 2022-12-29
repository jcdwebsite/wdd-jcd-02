<script>
	import { Card } from 'flowbite-svelte';

	export let content;

	const formatDate = (date) => {
		let formattedDate;
		formattedDate = new Date(date);
		return formattedDate.toLocaleDateString();
	};
</script>

{#each content as { title, excerpt, date, id, jetpack_featured_media_url }}
	<div class="flex flex-col py-3 items-center">
		<Card
			img={jetpack_featured_media_url}
			horizontal
			reverse="true"
			class="bg-cyan-900 border-none hover:bg-cyan-900"
		>
			<div class="text-md text-cyan-500">Blog</div>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-300 dark:text-white">
				<a href={`blog/${id}`}>
					{title.rendered}
				</a>
			</h5>
			<div class="text-md text-cyan-500">{formatDate(date)}</div>
			<p class="text-md mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
				<a href={`blog/${id}`}>
					{@html excerpt.rendered}
				</a>
			</p>
		</Card>
	</div>
{/each}
