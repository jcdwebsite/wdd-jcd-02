<script>
	import { Input, Textarea } from 'flowbite-svelte';
</script>

<form
	name="contact"
	method="POST"
	netlify-honeypot="bot-field"
	data-netlify="true"
	class=" bg-cyan-900 py-10 px-3 sm:px-10 flex flex-col items-center gap-3 sm:w-2/3 xl:w-2/6 custom-shadow"
>
	<input type="hidden" name="form-name" value="contact-page" />
	<div class="placeholder pb-6">
		<div class="text-2xl text-cyan-400 text-center">Want to work together?</div>
		<div class="text-xl text-cyan-400 text-center">Fill out this form to get started.</div>
	</div>
	<Input
		name="name"
		required
		type="text"
		placeholder="Full Name"
		size="md"
		class="bg-white hover:border-orange-500"
	/>
	<Input
		name="address"
		required
		type="text"
		placeholder="Project Address"
		size="md"
		class="bg-white hover:border-orange-500"
	/>
	<Input
		name="email"
		required
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
		name="details"
		required
		class="bg-white hover:border-orange-500"
		id="textarea-id"
		placeholder="Your scope of work, lot size, if you are working with a contractor, etc..."
		rows="5"
	/>
	<button
		type="submit"
		value="Submit"
		method="post"
		class="text-xl font-bold text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer"
	>
		Send
	</button>
</form>
