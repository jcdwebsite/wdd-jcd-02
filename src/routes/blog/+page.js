/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// This load function runs on the home page and loads relevant content,
	// each +page.js in each route does the same
	// the categories=6 is the blog category, which is important to not change as it will change the relevant content
	async function fetchBlogData() {
		const req = await fetch('https://josecruzdesigns.net/wp-json/wp/v2/posts?categories=6');
		const res = await req.json();
		return res;
	}

	return {
		blogData: fetchBlogData()
	};
}
