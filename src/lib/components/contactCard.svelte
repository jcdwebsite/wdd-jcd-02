<script>
	import { Input, Textarea } from 'flowbite-svelte';
</script>

<div class="placeholder pb-6">
	<div class="text-2xl text-cyan-400 text-center">Want to work together?</div>
	<div class="text-xl text-cyan-400 text-center">Fill out this form to get started.</div>
	<form name="contact-form" method="POST" netlify-honeypot="bot-field" data-netlify="true">
		<input type="hidden" name="form-name" value="netlify-form-example" />
		<input name="name" id="name" required placeholder="Name" type="text" />
		<input name="email" id="email" required placeholder="Email" type="email" />
		<input name="message" id="message" required placeholder="Message" type="text" />
		<input type="submit" value="Submit" />
	</form>
	<!-- <form
		name="contact"
		method="POST"
		netlify-honeypot="bot-field"
		data-netlify="true"
		class=" bg-cyan-900 py-10 px-3 sm:px-10 flex flex-col items-center gap-3 sm:w-2/3 xl:w-2/6 custom-shadow"
	>
		<input type="hidden" name="form-name" value="contact-form" />
		<input
			name="name"
			id="name"
			required
			type="text"
			placeholder="Full Name"
			class="bg-white hover:border-orange-500"
		/>
		<input
			name="address"
			id="address"
			required
			type="text"
			placeholder="Project Address"
			class="bg-white hover:border-orange-500"
		/>
		<input
			name="email"
			id="email"
			required
			type="email"
			placeholder="email@example.com"
			class="bg-white hover:border-orange-500"
		/>

		<textarea
			name="details"
			id="details"
			required
			type="text"
			class="bg-white hover:border-orange-500"
			placeholder="Your scope of work, lot size, if you are working with a contractor, etc..."
			rows="5"
		/>
		<input
			type="submit"
			value="Submit"
			class="text-xl font-bold text-orange-400 underline underline-offset-8 hover:underline-offset-2 cursor-pointer"
		/>
	</form> -->
</div>
