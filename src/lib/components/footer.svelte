<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink
	} from 'flowbite-svelte';
	import logo from '$lib/graphics/logowithoutcircle.svg';
</script>

<Footer footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="/" src={logo} alt="Cruz Designs Logo" imgClass="h-14" />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			<FooterLink href="/about">
				<div class="text-cyan-500 text-lg">About</div>
			</FooterLink>
			<FooterLink href="/work">
				<div class="text-cyan-500 text-lg">Work</div>
			</FooterLink>
			<FooterLink href="/gallery">
				<div class="text-cyan-500 text-lg">Gallery</div>
			</FooterLink>
			<FooterLink href="/store">
				<div class="text-cyan-500 text-lg">Store</div>
			</FooterLink>
			<FooterLink href="/contact">
				<div class="text-cyan-500 text-lg">Contact</div>
			</FooterLink>
			<FooterLink href="/blog">
				<div class="text-cyan-500 text-lg">Blog</div>
			</FooterLink>
		</FooterLinkGroup>
	</div>
	<hr class="my-6 border-orange-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<FooterCopyright
		href="/"
		by="Cruz Designs"
		spanClass="block text-sm text-cyan-500 sm:text-center dark:text-cyan-500"
	/>
</Footer>
