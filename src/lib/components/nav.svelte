<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron
	} from 'flowbite-svelte';
	import logo from '$lib/graphics/logowithoutcircle.svg';
</script>

<Navbar
	navClass="px-2 sm:px-4 pt-2.5 sticky w-full z-20 top-0 left-0 bg-transparent"
	let:hidden
	let:toggle
>
	<NavBrand href="/">
		<!-- <img src={logo} class="sm:h-16" alt="Cruz Designs Logo" /> -->
		<div class="text-lg text-cyan-500">Cruz Designs</div>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi id="nav-menu1" class="cursor-pointer"
			><Chevron aligned>
				<div class="text text-black">More</div>
			</Chevron></NavLi
		>
		<NavLi href="/work">
			<div class="text text-black">Work</div>
		</NavLi>
		<NavLi href="/pricing">
			<div class="text text-black">Contact</div>
		</NavLi>
		<NavLi href="/contact">
			<div class="text text-black">Store</div>
		</NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem href="/blog">Blog</DropdownItem>
			<DropdownItem href="/about">About</DropdownItem>
			<DropdownItem href="/gallery">Gallery</DropdownItem>
		</Dropdown>
	</NavUl>
</Navbar>
