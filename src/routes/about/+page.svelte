<script>
	export let data;

	let { title, content } = data.aboutData[0];
</script>

<div class="flex flex-col gap-6 bg-cyan-900 px-3 py-6 sm:p-10">
	<div class="text-2xl sm:text-3xl text-cyan-300">{title.rendered}</div>
	<div class="text-lg sm:text-xl text-cyan-300 tracking-wide">
		{@html content.rendered}
	</div>

	<div class="flex flex-col gap-4 items-center sm:flex sm:justify-evenly">
		<div
			class="text-lg sm:text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-1 cursor-pointer"
		>
			<a href="/blog"> Check out my Blog </a>
		</div>
		<div class="text-md sm:text-lg text-cyan-300">OR</div>
		<div
			class="text-lg sm:text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-1 cursor-pointer"
		>
			<a href="/store"> Check out the Store </a>
		</div>
	</div>

	<!-- <div class=" text-sm text-cyan-300">This website was built by jbcg.com</div> -->
</div>
