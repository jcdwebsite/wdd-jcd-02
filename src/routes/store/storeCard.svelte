<script>
	import { Card } from 'flowbite-svelte';

	export let content;
</script>

{#each content as { title, body, date, link, src, price }}
	<div class="flex flex-col py-3 items-center">
		<Card
			img={src}
			href={link}
			horizontal
			reverse="true"
			class="bg-cyan-900 border-none hover:bg-cyan-900"
		>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-300 dark:text-white">
				{title}
			</h5>
			<p class="text-md mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
				{body}
			</p>
			<div class="py-2 flex justify-between items-center">
				<span class="text-3xl font-bold text-cyan-400 dark:text-white">{`${price}`}</span>
				<a
					href={link}
					class="text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer"
				>
					Buy the plans
				</a>
			</div>
		</Card>
	</div>
{/each}
