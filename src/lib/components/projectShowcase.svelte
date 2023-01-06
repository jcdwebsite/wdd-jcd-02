<script>
	// import img2 from '$lib/images/TrussFinish01.jpg';
	import { Img } from 'flowbite-svelte';

	export let content;
</script>

{#each content as { title, excerpt, jetpack_featured_media_url, id }, index}
	{#if index % 2 === 0}
		<div class="bg-cyan-900 block py-60 md:grid md:grid-cols-2 sm:gap-10">
			<div class="md:col-span-1 imgContainer">
				<a href={`work/${id}`}>
					<!-- <img class="md:h-full md:w-auto" alt="work profile" src={jetpack_featured_media_url} /> -->
					<Img src={jetpack_featured_media_url} alt={title.rendered} />
				</a>
			</div>
			<div class="md:col-span-1 self-center text-left px-3 py-3 sm:px-[9%] xl:px-[20%] sm:ml-10 ">
				<div class="text-xl mb-2 lg:text-2xl text-cyan-600">{@html title.rendered}</div>
				<div class="text-cyan-400 text-2xl mb-2 lg:text-3xl lg:mb-5">
					This project was unique because of these reasons:
				</div>
				<div class="text-cyan-300 text-xl mb-5 lg:text-2xl lg:mb-10">
					{@html excerpt.rendered}
				</div>
				<a
					href={`work/${id}`}
					class="text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer my-4"
				>
					Find out more
				</a>
			</div>
		</div>
	{:else}
		<div class="bg-cyan-900 block pb-60 md:grid md:grid-cols-2 sm:gap-10">
			<div class="md:col-span-1 self-center text-left px-3 py-3 sm:px-[9%] xl:px-[20%] sm:ml-10">
				<div class="text-xl mb-2 lg:text-2xl text-cyan-600">{title.rendered}</div>
				<div class="text-cyan-400 text-2xl mb-2 lg:text-3xl lg:mb-5">
					This project was unique because of these reasons:
				</div>
				<div class="text-cyan-300 text-xl mb-5 lg:text-2xl lg:mb-10">
					{@html excerpt.rendered}
				</div>
				<a
					href={`work/${id}`}
					class="text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer"
				>
					Find out more
				</a>
			</div>
			<div class="md:col-span-1">
				<a href={`work/${id}`}>
					<!-- <img class="md:h-full md:w-auto" alt="work profile" src={jetpack_featured_media_url} /> -->
					<Img src={jetpack_featured_media_url} alt={title.rendered} />
				</a>
			</div>
		</div>
	{/if}
{/each}
