<script lang="ts">
    import DashboardCards from "$lib/components/dashboard_cards.svelte";
	import ProjectCards from "$lib/components/project_cards.svelte";
    /** @type {import('./$types').PageData} */
    export let data;
    export let form;
    $: console.log(form)
   
    
    
</script>
<section>
    <DashboardCards />
    <ProjectCards  projects={data.data} />
      
</section>

