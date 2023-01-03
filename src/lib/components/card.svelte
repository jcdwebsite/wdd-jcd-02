<script>
	import { Card } from 'flowbite-svelte';

	export let content;

	const formatDate = (date) => {
		let formattedDate;
		formattedDate = new Date(date);
		return formattedDate.toLocaleDateString();
	};
</script>

<!-- the commented out section needs to become its own store card component -->

{#each content as { excerpt, title, date, jetpack_featured_media_url, id }}
	<Card img={jetpack_featured_media_url} color={'none'} border={false}>
		<!-- <div class="shadow-xl rounded-lg bg-cyan-900"> -->
			<!-- <img src={jetpack_featured_media_url} alt={title} class="rounded-t-lg  "/> -->
			<div class="p-3">
				<h5 class="my-1 text-md font-bold tracking-tight text-cyan-300">Blog</h5>
				<a href={`blog/${id}`}>
					<h5 class="my-1 text-2xl font-semibold tracking-tight text-cyan-300 dark:text-white">
						{@html title.rendered}
					</h5>
				</a>
				<h5 class="my-1 text-md tracking-tight text-cyan-200 dark:text-white">{formatDate(date)}</h5>
				<a href={`blog/${id}`}>
					<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
						{@html excerpt.rendered}
					</p>
				</a>
			</div>
		<!-- </div> -->
	</Card>
{/each}
