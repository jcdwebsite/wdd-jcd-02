<script>
	export let data;

	let { title, content } = data.aboutData[0];
</script>

<div class="h-screen w-auto bg-cyan-900 p-10">
	<div class="flex flex-col gap-6">
		<div class="text-3xl text-cyan-300">{title.rendered}</div>
		<div class="text-xl text-cyan-300 tracking-wide">
			{@html content.rendered}
		</div>

		<div class="flex justify-evenly">
			<div
				class="text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-1 cursor-pointer"
			>
				<a href="/blog"> Check out my Blog </a>
			</div>
			<div class="text-xl text-cyan-300">OR</div>
			<div
				class="text-xl text-orange-400 underline underline-offset-8 hover:underline-offset-1 cursor-pointer"
			>
				<a href="/store"> Check out the Store </a>
			</div>
		</div>
	</div>

	<!-- <div class=" text-sm text-cyan-300">This website was built by jbcg.com</div> -->
</div>
