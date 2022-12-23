<script>
	import { Card, Button, Label, Input, Textarea } from 'flowbite-svelte';
	import img1 from '$lib/images/IMG_0753.png';
	import img2 from '$lib/images/TrussFinish01.jpg';
	import img3 from '$lib/images/TrussFinish02.jpg';
	import img4 from '$lib/images/TrussFinish03.jpg';
</script>

<!-- Top level cards, using flowbite -->
<div class="px-3 flex gap-4 justify-center">
	<Card img={img1} color={'none'} border={false}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-300 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
	<Card img={img2} color={'none'} border={false}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-300 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
	<Card img={img3} color={'none'} border={false}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-300 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-cyan-300 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
</div>

<!-- Description of Cruz Designs -->
<div class="px-3 mt-20 grid grid-cols-6">
	<div class="col-span-2 text-xl text-orange-400 font-semibold underline underline-offset-8">
		What is Cruz Designs?
	</div>
	<div class="col-span-4 text-4xl text-cyan-300">
		I am Jose Cruz, a state certified architect in Illinois and California. I do interior designs as
		well as custom homes, feel free to contact me via this site or check out the store where you can
		buy plans for your lot.
	</div>
</div>

<!-- Big project cards -->
<div class="bg-cyan-900 block py-60 md:grid md:grid-cols-2">
	<div class="col-span-1 imgContainer">
		<img class="md:h-full bg-cover" alt="work profile" src={img2} />
	</div>
	<div class="col-span-1 mt-4text-left px-3 sm:ml-10 xl:w-1/2">
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
	<div class="col-span-1 mt-4text-left px-3 sm:ml-10 xl:w-1/2">
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

<!-- Buy call to action -->
<div class="bg-gradient-to-b from-cyan-900 to-white">
	<div class="px-3 py-6 flex justify-center gap-3">
		<Card padding="none">
			<a href="/store">
				<img class="rounded-t-lg" src={img1} alt="product 1" />
			</a>
			<div class="px-5">
				<a href="/store">
					<h5 class="py-2 text-xl font-semibold tracking-tight text-cyan-600 dark:text-white">
						1,200 Square foot two story home. Modern interior with architectural details on the
						exterior.
					</h5>
				</a>
				<div class="py-2 flex justify-between items-center">
					<span class="text-3xl font-bold text-cyan-600 dark:text-white">$500</span>
					<Button
						size="md"
						class="bg-gradient-to-tl from-orange-200 to-orange-600 
					hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-200"
					>
						<div class="text-md">Buy the plans</div>
					</Button>
				</div>
			</div>
		</Card>
		<Card padding="none">
			<a href="/store">
				<img class="rounded-t-lg" src={img1} alt="product 1" />
			</a>
			<div class="px-5">
				<a href="/store">
					<h5 class="py-2 text-xl font-semibold tracking-tight text-cyan-600 dark:text-white">
						1,200 Square foot two story home. Modern interior with architectural details on the
						exterior.
					</h5>
				</a>
				<div class="py-2 flex justify-between items-center">
					<span class="text-3xl font-bold text-cyan-600 dark:text-white">$500</span>
					<Button
						size="md"
						class="bg-gradient-to-tl from-orange-200 to-orange-600 
					hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-200"
					>
						<div class="text-md">Buy the plans</div>
					</Button>
				</div>
			</div>
		</Card>
		<Card padding="none">
			<a href="/store">
				<img class="rounded-t-lg" src={img1} alt="product 1" />
			</a>
			<div class="px-5">
				<a href="/store">
					<h5 class="py-2 text-xl font-semibold tracking-tight text-cyan-600 dark:text-white">
						1,200 Square foot two story home. Modern interior with architectural details on the
						exterior.
					</h5>
				</a>
				<div class="py-2 flex justify-between items-center">
					<span class="text-3xl font-bold text-cyan-600 dark:text-white">$500</span>
					<Button
						size="md"
						class="bg-gradient-to-tl from-orange-200 to-orange-600 
					hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-200"
					>
						<div class="text-md">Buy the plans</div>
					</Button>
				</div>
			</div>
		</Card>
	</div>

	<!-- Other contact form -->
	<form
		class="bg-gradient-to-t from-cyan-900 to-transparent p-10 flex flex-col items-center gap-3 w-2/3 mx-auto shadow-xl"
	>
		<div class="placeholder">
			<div class="text-2xl text-white text-center">Want to work together?</div>
			<div class="text-xl text-white text-center">Fill out this form to get started.</div>
		</div>
		<Input type="text" placeholder="Full Name" size="md" class="bg-white hover:border-orange-500" />
		<Input
			type="text"
			placeholder="Project Address"
			size="md"
			class="bg-white hover:border-orange-500"
		/>
		<Input
			type="email"
			placeholder="email@example.com"
			size="md"
			class="bg-white hover:border-orange-500"
		>
			<svg
				slot="left"
				aria-hidden="true"
				class="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path
					d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
				/></svg
			>
		</Input>
		<Textarea
			class="bg-white hover:border-orange-500"
			id="textarea-id"
			placeholder="Your scope of work, lot size, if you are working with a contractor, etc..."
			rows="5"
			name="message"
		/>
		<Button
			size="md"
			class="bg-gradient-to-tl from-orange-200 to-orange-600 
	hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-200"
		>
			<div class="text-md">Send</div>
		</Button>
	</form>
</div>

<style>
	.bg-svg {
		background-image: url('../lib/graphics/patternGraphic.svg');
	}
</style>
