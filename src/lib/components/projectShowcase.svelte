<script>
	import { Button } from 'flowbite-svelte';

	import img2 from '$lib/images/TrussFinish01.jpg';
</script>

<div class="bg-cyan-900 block py-60 md:grid md:grid-cols-2">
	<div class="col-span-1 imgContainer">
		<img class="md:h-full bg-cover" alt="work profile" src={img2} />
	</div>
	<div class="col-span-1 self-center text-left px-3 sm:ml-10 xl:w-1/2">
		<div class="text-xl mb-2 lg:text-2xl text-cyan-600">Project Name</div>
		<div class="text-cyan-400 text-2xl mb-2 lg:text-3xl lg:mb-5">
			This project was unique because of these reasons:
		</div>
		<div class="text-cyan-300 text-xl mb-5 lg:text-2xl lg:mb-10">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, explicabo itaque voluptatem
			nostrum neque quod harum laboriosam.
		</div>
		<Button
			size="lg"
			class="bg-gradient-to-tl from-orange-200 to-orange-600 
			hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-200"
		>
			<div class="text-xl">Find out more</div>
		</Button>
	</div>
</div>

<div class="bg-cyan-900 block py-60 md:grid md:grid-cols-2">
	<div class="col-span-1 self-center text-left px-3 sm:ml-10 xl:w-1/2">
		<div class="text-xl mb-2 lg:text-2xl text-cyan-600">Project Name</div>
		<div class="text-cyan-400 text-2xl mb-2 lg:text-3xl lg:mb-5">
			This project was unique because of these reasons:
		</div>
		<div class="text-cyan-300 text-xl mb-5 lg:text-2xl lg:mb-10">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, explicabo itaque voluptatem
			nostrum neque quod harum laboriosam.
		</div>
		<Button
			size="lg"
			class="bg-gradient-to-tl from-orange-200 to-orange-600 
			hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-200"
		>
			<div class="text-xl">Find out more</div>
		</Button>
	</div>
	<div class="col-span-1 imgContainer">
		<img class="md:w-full" alt="work profile" src={img2} />
	</div>
</div>
