<script>
	import { Card } from 'flowbite-svelte';

	export let content;

	const formatDate = (date) => {
		let formattedDate;
		formattedDate = new Date(date);
		return formattedDate.toLocaleDateString();
	};
</script>

{#each content as { excerpt, title, date, jetpack_featured_media_url, id }}
	<Card img={jetpack_featured_media_url} color={'none'} border={false}>
		<div class="p-3">
			<h5 class="my-1 text-md font-bold tracking-tight text-cyan-500">Blog</h5>
			<a href={`blog/${id}`}>
				<h5 class="my-1 text-2xl font-semibold tracking-tight text-cyan-300 dark:text-white">
					{@html title.rendered}
				</h5>
			</a>
			<h5 class="my-1 text-md tracking-tight text-cyan-500 dark:text-white">{formatDate(date)}</h5>
			<a href={`blog/${id}`}>
				<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
					{@html excerpt.rendered}
				</p>
			</a>
		</div>
	</Card>
{/each}
