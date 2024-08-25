<script lang="ts">
    import DashboardCards from "$lib/components/dashboard_cards.svelte";
	import ProjectCards from "$lib/components/project_cards.svelte";
    export let data;
   
    
    
</script>
<section>
    <DashboardCards />
    <section id="projects">

        <ProjectCards  projects={data.data} />
    </section>
      
</section>

