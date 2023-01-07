<script>
	import { Input, Textarea } from 'flowbite-svelte';
	import ContactCard from '../../lib/components/contactCard.svelte';
</script>

<div class="bg-cyan-900 bg-svg ">
	<div class="flex flex-col sm:items-center py-40">
		<ContactCard />
	</div>
	<!-- <form name="netlify-form-example" method="POST" netlify-honeypot="bot-field" data-netlify="true">
		<input type="hidden" name="form-name" value="netlify-form-example" />
		<label for="name">Name</label>
		<input name="name" id="name" required placeholder="Name" type="text" />
		<label for="email">Email</label>
		<input name="email" id="email" required placeholder="Email" type="email" />
		<label for="message">Message</label>
		<input name="message" id="message" required placeholder="Message" type="text" />
		<input type="submit" value="Submit" />
	</form> -->
</div>

<style>
	.bg-svg {
		background-image: url('$lib/graphics/skylineOutline.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	}

	.custom-shadow {
		box-shadow: 0px 15px 150px 20px rgb(0, 0, 0);
	}
</style>
