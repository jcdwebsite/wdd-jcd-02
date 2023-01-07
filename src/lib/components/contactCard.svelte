<div
	class="bg-cyan-900 w-full sm:w-3/4 xl:w-2/6 px-3 py-5 sm:p-6 border rounded-md border-orange-500 custom-shadow"
>
	<div class="flex flex-col gap-1 pb-4">
		<div class="text-2xl text-cyan-400 text-center">Want to work together?</div>
		<div class="text-xl text-cyan-400 text-center">Fill out this form to get started.</div>
	</div>
	<form
		name="contact-form"
		method="POST"
		netlify-honeypot="bot-field"
		data-netlify="true"
		class="flex flex-col gap-3 sm:px-20"
	>
		<input type="hidden" name="form-name" value="contact" />
		<input name="name" id="name" required placeholder="Name" type="text" />
		<input name="email" id="email" required placeholder="Email" type="email" />
		<input
			name="address"
			id="address"
			required
			type="text"
			placeholder="Project Address"
			class="bg-white hover:border-orange-500"
		/>
		<textarea
			name="message"
			id="message"
			required
			type="text"
			placeholder="Your scope of work, lot size, if you are working with a contractor, etc..."
			rows="5"
		/>
		<input
			type="submit"
			value="Submit"
			class="text-2xl text-orange-500 underline underline-offset-2 hover:underline-offset-1"
		/>
	</form>
</div>

<style>
	.custom-shadow {
		box-shadow: 0px 15px 150px 20px rgb(0, 0, 0);
	}
</style>
