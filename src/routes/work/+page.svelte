<script>
	import ProjectShowcase from '$lib/components/projectShowcase.svelte';

	export let data;

	// Project showcase data
	let projectContent = [];

	data.projectData.forEach((element) => {
		let { title, excerpt, jetpack_featured_media_url, id } = element;
		projectContent.push({ title, excerpt, jetpack_featured_media_url, id });
	});
</script>

<ProjectShowcase content={projectContent} />
