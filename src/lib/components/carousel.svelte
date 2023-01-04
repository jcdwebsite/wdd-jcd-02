<script>
	// All commented things are for pagination of the carousel
	// import { Pagination, PaginationItem } from 'flowbite-svelte';
	// const previous = () => {
	// 	alert('Previous btn clicked. Make a call to your server to fetch data.');
	// };
	// const next = () => {
	// 	alert('Next btn clicked. Make a call to your server to fetch data.');
	// };

	export let content;
	export const getItemId = (index) => `carousel-item${index}`;

	const formatDate = (date) => {
		let formattedDate;
		formattedDate = new Date(date);
		return formattedDate.toLocaleDateString();
	};

	// const scrollIntoView = ({ currentTarget }) => {
	// 	const link = currentTarget.getAttribute('href');
	// 	if (!link) return;

	// 	const scrollToElement = document.querySelector(link);

	// 	if (!scrollToElement) return;

	// 	scrollToElement.scrollIntoView({
	// 		block: 'nearest',
	// 		behavior: 'smooth'
	// 	});
	// };
</script>

<ul class="flex overflow-x-auto gap-3 snap-x snap-mandatory py-3 px-2">
	{#each content as { excerpt, title, date, jetpack_featured_media_url, id  }, index}
	<li id={getItemId(index)} class="py-3 shrink-0 snap-center w-4/5 shadow-xl rounded-lg">
	<img src={jetpack_featured_media_url} alt={title.rendered} class="rounded-t-lg" />
			<a href={`blog/${id}`} class="px-4">
				<h5 class="mb-2 mt-4 text-md font-bold tracking-tight text-cyan-300">Blog</h5>
				<div class="py-2 text-2xl font-semibold tracking-tight text-cyan-300 dark:text-white">
					{@html title.rendered}
				</div>
				<h5 class="mb-2 text-md tracking-tight text-cyan-200 dark:text-white">{formatDate(date)}</h5>
				<div class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">{@html excerpt.rendered}</div>
			</a>
		</li>
	{/each}
</ul>

<!-- <nav>
	{#each images as { title }, index}
		<li class="shrink-0 snap-center">
			<a href={`#${getItemId(index)}`} on:click|preventDefault={scrollIntoView}>{title}</a>
		</li>
	{/each}
	<div class="flex space-x-3">
		<PaginationItem class="flex items-center" on:click={scrollIntoView}>
			<svg
				class="mr-2 w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</PaginationItem>
		<PaginationItem class="flex items-center" on:click={scrollIntoView}>
			<svg
				class="ml-2 w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</PaginationItem>
	</div>
</nav> -->
