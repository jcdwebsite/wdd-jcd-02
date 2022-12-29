/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// This load function runs on the home page and loads relevant content,
	// each +page.js in each route does the same
	// can put multiple fetch calls in here as async functions
	async function fetchBlogData() {
		const req = await fetch('https://josecruzdesigns.net/wp-json/wp/v2/posts?categories=6');
		const res = await req.json();
		// console.log(res);
		return res;
	}

	return {
		blogData: fetchBlogData()
	};
}
