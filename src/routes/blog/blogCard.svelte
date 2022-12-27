<script>
	import { Card } from 'flowbite-svelte';

	export let content;
</script>

{#each content as { title, body, tag, date, link, src }}
	<div class="flex flex-col py-3 items-center">
		<Card
			img={src}
			href={link}
			horizontal
			reverse="true"
			class="bg-cyan-900 border-none hover:bg-cyan-900"
		>
			<div class="text-md text-cyan-500">{tag}</div>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-300 dark:text-white">
				{title}
			</h5>
			<div class="text-md text-cyan-500">{date}</div>
			<p class="text-md mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
				{body}
			</p>
		</Card>
	</div>
{/each}
