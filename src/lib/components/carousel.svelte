<script>
	export let content;
	export const getItemId = (index) => `carousel-item${index}`;

	const formatDate = (date) => {
		let formattedDate;
		formattedDate = new Date(date);
		return formattedDate.toLocaleDateString();
	};
</script>

<ul class="flex overflow-x-auto gap-3 snap-x snap-mandatory py-3 px-2">
	{#each content as { excerpt, title, date, jetpack_featured_media_url, id }, index}
		<li id={getItemId(index)} class="py-3 shrink-0 snap-center w-4/5 shadow-xl rounded-lg">
			<img src={jetpack_featured_media_url} alt={title.rendered} class="rounded-t-lg" />
			<a href={`blog/${id}`} class="px-4">
				<h5 class="mb-2 mt-4 text-md font-bold tracking-tight text-cyan-300">Blog</h5>
				<div class="py-2 text-2xl font-semibold tracking-tight text-cyan-300 dark:text-white">
					{@html title.rendered}
				</div>
				<h5 class="mb-2 text-md tracking-tight text-cyan-200 dark:text-white">
					{formatDate(date)}
				</h5>
				<div class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
					{@html excerpt.rendered}
				</div>
			</a>
		</li>
	{/each}
</ul>
