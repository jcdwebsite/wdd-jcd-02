/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// This load function runs on the home page and loads relevant content,
	// each +page.js in each route does the same
	// the categories=8 is the store category, which is important to not change as it will change the relevant content
	async function fetchStoreData() {
		const req = await fetch('https://josecruzdesigns.net/wp-json/wp/v2/posts?categories=8');
		const res = await req.json();
		return res;
	}

	async function fetchStoreHeader() {
		const req = await fetch('https://josecruzdesigns.net/wp-json/wp/v2/posts?categories=8&tags=7');
		const res = await req.json();
		return res;
	}

	return {
		storeData: fetchStoreData(),
		storeHeader: fetchStoreHeader()
	};
}
