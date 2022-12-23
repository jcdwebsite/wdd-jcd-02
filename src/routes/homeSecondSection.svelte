<script>
	import ContactCard from '../lib/components/contactCard.svelte';
	import PlansCta from '../lib/components/plansCta.svelte';
	import ProjectShowcase from '../lib/components/projectShowcase.svelte';
	import BlogCards from '../lib/components/blogCards.svelte';
</script>

<!-- Top level cards, using flowbite -->
<BlogCards />
<!-- Description of Cruz Designs -->
<div class="px-3 pt-4 mt-20 grid grid-cols-6">
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
<ProjectShowcase />
<!-- Buy call to action -->
<div class="bg-cyan-900 py-10">
	<PlansCta />
	<!-- Other contact form -->
	<ContactCard />
</div>
