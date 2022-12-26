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

<Navbar let:hidden let:toggle navDivClass="mx-auto">
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} ulClass="py-4 md:flex md:justify-center md:mx-auto md:items-center md:gap-10">
		<NavLi href="/">
			<img src={logo} class="h-10 sm:h-12" alt="Cruz Designs Logo" />
		</NavLi>
		<NavLi id="nav-menu1" class="cursor-pointer"
			><Chevron aligned>
				<div class="text-lg text-orange-500">More</div>
			</Chevron></NavLi
		>
		<NavLi href="/work">
			<div class="text-lg text-orange-500">Work</div>
		</NavLi>
		<NavLi href="/contact">
			<div class="text-lg text-orange-500">Contact</div>
		</NavLi>
		<NavLi href="/store">
			<div class="text-lg text-orange-500">Store</div>
		</NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
			<DropdownItem href="/blog">
				<div class="text-lg text-orange-500 font-normal">Blog</div>
			</DropdownItem>
			<DropdownItem href="/about">
				<div class="text-lg text-orange-500 font-normal">About</div>
			</DropdownItem>
			<DropdownItem href="/gallery">
				<div class="text-lg text-orange-500 font-normal">Gallery</div>
			</DropdownItem>
		</Dropdown>
	</NavUl>
</Navbar>
