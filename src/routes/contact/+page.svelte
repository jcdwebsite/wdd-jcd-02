<script>
	import { Input, Textarea } from 'flowbite-svelte';
	import ContactCard from './contactCard2.svelte';

	import pic from '$lib/images/TrussFinish06.jpg';
</script>

<div class="bg-cyan-900 bg-svg ">
	<!-- <div class="flex flex-col sm:items-center py-40">
		<form
			class=" bg-cyan-900 py-10 px-3 sm:px-10 flex flex-col items-center gap-3 sm:w-2/3 xl:w-2/6 custom-shadow"
		>
			<div class="placeholder pb-6">
				<div class="text-2xl text-cyan-400 text-center">Want to work together?</div>
				<div class="text-xl text-cyan-400 text-center">Fill out this form to get started.</div>
			</div>
			<Input
				type="text"
				placeholder="Full Name"
				size="md"
				class="bg-white hover:border-orange-500"
			/>
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
			<button
				method="post"
				class="text-xl font-bold text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer"
			>
				Send
			</button>
		</form>
	</div> -->
	<form name="netlify-form-example" method="POST" netlify-honeypot="bot-field" data-netlify="true">
		<input type="hidden" name="form-name" value="netlify-form-example" />
		<label for="name">Name</label>
		<input name="name" id="name" required placeholder="Name" type="text" />
		<label for="email">Email</label>
		<input name="email" id="email" required placeholder="Email" type="email" />
		<label for="message">Message</label>
		<input name="message" id="message" required placeholder="Message" type="text" />
		<input type="submit" value="Submit" />
	</form>
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
