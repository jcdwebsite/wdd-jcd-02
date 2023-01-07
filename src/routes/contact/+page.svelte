<script>
	import ContactCard from '../../lib/components/contactCard.svelte';
</script>

<div class="bg-cyan-900 bg-svg ">
	<div class="flex flex-col sm:items-center py-40">
		<ContactCard />
	</div>
</div>

<style>
	.bg-svg {
		background-image: url('$lib/graphics/skylineOutline.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 200%;
	}

	.custom-shadow {
		box-shadow: 0px 15px 150px 20px rgb(0, 0, 0);
	}
</style>
