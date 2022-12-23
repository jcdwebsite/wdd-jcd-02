<script>
	import { Card, Button } from 'flowbite-svelte';

	import img1 from '$lib/images/IMG_0753.png';
</script>

<div class="px-3 py-6 flex justify-center gap-3">
	<Card padding="none" color={'none'} border={false}>
		<a href="/store">
			<img class="rounded-t-lg" src={img1} alt="product 1" />
		</a>
		<div class="px-5">
			<a href="/store">
				<h5 class="py-2 text-xl font-semibold tracking-tight text-cyan-400 dark:text-white">
					1,200 Square foot two story home. Modern interior with architectural details on the
					exterior.
				</h5>
			</a>
			<div class="py-2 flex justify-between items-center">
				<span class="text-3xl font-bold text-cyan-400 dark:text-white">$500</span>
				<Button
					size="md"
					class="bg-gradient-to-tl from-orange-200 to-orange-600 
                hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-200"
				>
					<div class="text-md text-cyan-100">Buy the plans</div>
				</Button>
			</div>
		</div>
	</Card>
	<Card padding="none" color={'none'} border={false}>
		<a href="/store">
			<img class="rounded-t-lg" src={img1} alt="product 1" />
		</a>
		<div class="px-5">
			<a href="/store">
				<h5 class="py-2 text-xl font-semibold tracking-tight text-cyan-400 dark:text-white">
					1,200 Square foot two story home. Modern interior with architectural details on the
					exterior.
				</h5>
			</a>
			<div class="py-2 flex justify-between items-center">
				<span class="text-3xl font-bold text-cyan-400 dark:text-white">$500</span>
				<Button
					size="md"
					class="bg-gradient-to-tl from-orange-200 to-orange-600 
                hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-200"
				>
					<div class="text-md text-cyan-100">Buy the plans</div>
				</Button>
			</div>
		</div>
	</Card>
	<Card padding="none" color={'none'} border={false}>
		<a href="/store">
			<img class="rounded-t-lg" src={img1} alt="product 1" />
		</a>
		<div class="px-5">
			<a href="/store">
				<h5 class="py-2 text-xl font-semibold tracking-tight text-cyan-400 dark:text-white">
					1,200 Square foot two story home. Modern interior with architectural details on the
					exterior.
				</h5>
			</a>
			<div class="py-2 flex justify-between items-center">
				<span class="text-3xl font-bold text-cyan-400 dark:text-white">$500</span>
				<Button
					size="md"
					class="bg-gradient-to-tl from-orange-200 to-orange-600 
                hover:bg-gradient-to-tr hover:from-orange-600 hover:to-orange-200"
				>
					<div class="text-md text-cyan-100">Buy the plans</div>
				</Button>
			</div>
		</div>
	</Card>
</div>
