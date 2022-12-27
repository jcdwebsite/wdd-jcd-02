<script>
	import { Card } from 'flowbite-svelte';

	export let content;
	// export let link;
	// export let image;
	// export let tag;
	// export let title;
	// export let body;
	// export let price;
	// export let date;
</script>

{#each content as { title, src, body, tag, date, link, price, type }}
	<Card img={src} color={'none'} border={false}>
		{#if type === 'plan'}
			<a href={link}>
				<h5 class="py-2 text-2xl font-semibold tracking-tight text-cyan-300 dark:text-white">
					{title}
				</h5>
			</a>
			<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
				{body}
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
		{:else}
			<h5 class="mb-2 text-md font-bold tracking-tight text-cyan-300">{tag}</h5>
			<a href={link}>
				<h5 class="py-2 text-2xl font-semibold tracking-tight text-cyan-300 dark:text-white">
					{title}
				</h5>
			</a>
			<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
				{body}
			</p>
			<h5 class="mb-2 text-md tracking-tight text-cyan-200 dark:text-white">{date}</h5>
		{/if}
	</Card>
{/each}
<!-- {#each content as { title, image, body, tag, date }}
<Card img={image} color={'none'} border={false}>
	{#if tag}
		<h5 class="mb-2 text-md font-bold tracking-tight text-cyan-300">{tag}</h5>
	{/if}
	<a href={link}>
		<h5 class="py-2 text-2xl font-semibold tracking-tight text-cyan-300 dark:text-white">
			{title}
		</h5>
	</a>
	{#if price}
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			{body}
		</p>
		<div class="py-2 flex justify-between items-center">
			<span class="text-3xl font-bold text-cyan-400 dark:text-white">{`$${price}`}</span>
			<a
				href="/store"
				class="text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer"
			>
				Buy the plans
			</a>
		</div>
	{:else}
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			{body}
		</p>
		<h5 class="mb-2 text-md tracking-tight text-cyan-200 dark:text-white">{date}</h5>
	{/if}
</Card>
{/each} -->
