// So that the contact form works
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// This load function runs on the home page and loads relevant content,
	// each +page.js in each route does the same
	// can put multiple fetch calls in here as async functions
	async function fetchBlogData() {
		const req = await fetch(
			'https://josecruzdesigns.net/wp-json/wp/v2/posts?categories=6&per_page=3'
		);
		const res = await req.json();
		return res;
	}

	async function fetchDescriptionData() {
		const req = await fetch('https://josecruzdesigns.net/wp-json/wp/v2/posts?categories=5&tags=9');
		const res = await req.json();
		return res;
	}

	async function fetchProjectData() {
		const req = await fetch(
			'https://josecruzdesigns.net/wp-json/wp/v2/posts?categories=10&per_page=3'
		);
		const res = await req.json();
		return res;
	}

	// category here is not correct
	// async function fetchPlanData() {
	// 	const req = await fetch("https://josecruzdesigns.net/wp-json/wp/v2/posts?categories=10&per_page=3");
	// 	const res = await req.json();
	// 	return res;
	// }

	return {
		blogData: fetchBlogData(),
		descriptionData: fetchDescriptionData(),
		projectData: fetchProjectData()
		// planData: fetchPlanData(),
	};
}
