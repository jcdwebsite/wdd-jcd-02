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
		<!-- {#if type === 'plan'}
			<a href={`blog/${id}`}>
				<h5 class="py-2 text-2xl font-semibold tracking-tight text-cyan-300 dark:text-white">
					{title.rendered}
				</h5>
			</a>
			<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
				{excerpt.rendered}
			</p>
			<div class="py-2 flex justify-between items-center">
				<span class="text-3xl font-bold text-cyan-400 dark:text-white">{`${price}`}</span>
				<a
					href="/store"
					class="text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer"
				>
					Buy the plans
				</a>
			</div>
		{:else} -->
		<h5 class="mb-2 text-md font-bold tracking-tight text-cyan-300">Blog</h5>
		<a href={`blog/${id}`}>
			<h5 class="py-2 text-2xl font-semibold tracking-tight text-cyan-300 dark:text-white">
				{@html title.rendered}
			</h5>
		</a>
		<h5 class="mb-2 text-md tracking-tight text-cyan-200 dark:text-white">{formatDate(date)}</h5>
		<a href={`blog/${id}`}>
			<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
				{@html excerpt.rendered}
			</p>
		</a>
		<!-- {/if} -->
	</Card>
{/each}
