<script>
	import { Card } from 'flowbite-svelte';
	import img1 from '$lib/images/IMG_0753.png';
	import img2 from '$lib/images/TrussFinish01.jpg';
</script>

<div class="flex gap-4 justify-center">
	<Card img={img1} class="bg-transparent border-none">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-400 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
	<Card img={img1} class="bg-transparent border-none">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-400 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
	<Card img={img1} class="bg-transparent border-none">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-orange-400 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
</div>

<div class="mt-20 grid grid-cols-6">
	<div class="col-span-2 text-xl text-orange-400 font-semibold">What is Cruz Designs?</div>
	<div class="col-span-4 text-4xl text-cyan-300">
		I am Jose Cruz, a state certified architect in Illinois and California. I do interior designs as
		well as custom homes, feel free to contact me via this site or check out the store where you can
		buy plans for your lot.
	</div>
</div>

<div class="bg-cyan-800 block py-60 md:flex xl:gap-60 md:items-center md:justify-between md:py-40">
	<div class="imgContainer">
		<img class="md:w-full" alt="work profile" src={img2} />
	</div>
	<div class="mt-4 container text-left px-3 sm:ml-10 xl:w-1/2">
		<div class="text-xl mb-2 lg:text-2xl text-orange-400">Project Name</div>
		<div class="text-cyan-300 text-2xl mb-2 lg:text-3xl lg:mb-5">
			This project was unique because of these reasons:
		</div>
		<div class="text-cyan-300 text-xl mb-5 lg:text-2xl lg:mb-10">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, explicabo itaque voluptatem
			nostrum neque quod harum laboriosam.
		</div>
		<div
			class="text-2xl sm:w-1/2 lg:text-3xl md:w-3/4 text-center text-cyan-800 bg-cyan-300
		 rounded-xl hover:text-cyan-300 hover:bg-cyan-900
		cursor-pointer xl:w-1/2"
		>
			<a href="/blog">Find out more</a>
		</div>
	</div>
</div>

<div class="bg-white block py-60 md:flex xl:gap-60 md:items-center md:justify-between md:py-40">
	<div class="container text-left px-3 sm:ml-10 xl:w-1/2">
		<div class="text-xl mb-2 lg:text-2xl text-orange-500">Project Name</div>
		<div class="text-cyan-500 text-2xl mb-2 lg:text-3xl lg:mb-5">
			This project was unique because of these reasons:
		</div>
		<div class="text-cyan-500 text-xl mb-5 lg:text-2xl lg:mb-10">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, explicabo itaque voluptatem
			nostrum neque quod harum laboriosam.
		</div>
		<div
			class="text-2xl mb-4 sm:w-1/2 lg:text-3xl md:w-3/4 text-center text-cyan-500 
		border border-cyan-500 rounded-xl hover:text-cyan-900 hover:bg-cyan-500
		cursor-pointer xl:w-1/2"
		>
			<a href="/blog">Find out more</a>
		</div>
	</div>
	<div class="imgContainer">
		<img class="md:w-full" alt="work profile" src={img2} />
	</div>
</div>
