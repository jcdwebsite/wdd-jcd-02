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
</script>

<Navbar let:hidden let:toggle navDivClass="sm:flex sm:justify-center sm:mx-auto">
	<!-- <NavBrand href="/">
		<img src={logo} class="sm:h-16" alt="Cruz Designs Logo" />
		<div class="text-xl text-cyan-500">Cruz Designs</div>
	</NavBrand> -->
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
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
				<div class="text-lg text-orange-500">Blog</div>
			</DropdownItem>
			<DropdownItem href="/about">
				<div class="text-lg text-orange-500">About</div>
			</DropdownItem>
			<DropdownItem href="/gallery">
				<div class="text-lg text-orange-500">Gallery</div>
			</DropdownItem>
		</Dropdown>
	</NavUl>
</Navbar>
