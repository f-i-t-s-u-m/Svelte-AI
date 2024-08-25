<script>

	import ProjectDashCards from "$lib/components/project_dash_cards.svelte";
	import ProjectTabs from "$lib/components/project_tabs.svelte";
    export let data;

</script>
<h1 class=" text-2xl font-bold text-gray-900 capitalize my-10"> {data.title}</h1>
<ProjectDashCards />
<ProjectTabs />

<slot />