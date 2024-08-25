<script lang="ts">
  export let projects;
 
</script>
<div class="md:w-2/3 lg:w-1/2">
  
   
    <h2 class="my-3 text-2xl font-bold md:text-4xl">Projects</h2>
    <p class="text-gray-600">Organize and manage your AI bot creations with dedicated projects for each custom setup.






    </p>
  </div>

  <div class="grid grid-cols-4 gap-3 mb-10">
  {#each projects as project}
      <div class="max-w-sm p-6 mt-10 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <a href="/project/{project.id}">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">{project.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description ?? ''}</p>
        
    </div>
    {/each}
  </div>