<script>
	// import img2 from '$lib/images/TrussFinish01.jpg';

	export let content;
</script>

{#each content as { title, excerpt, jetpack_featured_media_url }, index}
{#if index % 2 === 0}
	<div class="bg-cyan-900 block py-60 md:grid md:grid-cols-2">
		<div class="md:col-span-1 imgContainer">
			<!-- <a href={`work/${id}`}> -->
			<img class="md:h-full md:w-auto" alt="work profile" src={jetpack_featured_media_url} />
			<!-- </a> -->
		</div>
		<div class="col-span-1 self-center text-left px-3 sm:ml-10 xl:w-1/2">
			<div class="text-xl mb-2 lg:text-2xl text-cyan-600">{@html title.rendered}</div>
			<div class="text-cyan-400 text-2xl mb-2 lg:text-3xl lg:mb-5">
				This project was unique because of these reasons:
			</div>
			<div class="text-cyan-300 text-xl mb-5 lg:text-2xl lg:mb-10">
				{@html excerpt.rendered}
			</div>
			<a
				href="/work"
				class="text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer"
			>
				Find out more
			</a>
		</div>
	</div>
{:else}
	<div class="bg-cyan-900 block pb-60 md:grid md:grid-cols-2">
		<div class="col-span-1 self-center text-left px-3 sm:ml-10 xl:w-1/2">
			<div class="text-xl mb-2 lg:text-2xl text-cyan-600">{title.rendered}</div>
			<div class="text-cyan-400 text-2xl mb-2 lg:text-3xl lg:mb-5">
				This project was unique because of these reasons:
			</div>
			<div class="text-cyan-300 text-xl mb-5 lg:text-2xl lg:mb-10">
				{@html excerpt.rendered}
			</div>
			<a
				href="/work"
				class="text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer"
			>
				Find out more
			</a>
		</div>
		<div class="md:col-span-1 imgContainer">
			<img class="md:h-full md:w-auto" alt="work profile" src={jetpack_featured_media_url} />
		</div>
	</div>
	{/if}
{/each}