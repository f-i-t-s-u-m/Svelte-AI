<script>
	import { enhance } from '$app/forms';
	import { updated } from '$app/stores';
    import { createEventDispatcher } from 'svelte';
  
    export let showModal = false;
    export let form;

    $: console.log(form)
  
    let question = '';
    let creating = false;
    const dispatch = createEventDispatcher();
  
    function closeModal() {
      showModal = false;
      dispatch('close');
    }
  
    function handleSubmit() {
     creating = true;
     return async function ({update}) {
        const res = await update()
        
        showModal = false;
        
        creating = false
     }
    }
  </script>
  
  {#if showModal}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center" on:click={closeModal}>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="bg-white p-5 rounded-lg shadow-xl w-full max-w-md" on:click|stopPropagation>
        <h2 class="text-2xl font-bold mb-4"> New Question</h2>
        <hr>
        <form class="max-w-sm mx-auto pt-5" method="POST" action="?/create" use:enhance={handleSubmit}>
            <div class="mb-5">
              <label for="question" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Question</label>
              <input type="question" name="question" id="question" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="ex. my project name" required />
            </div>
           
            <button disabled={creating} type="submit" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 tracking-wider">Create new question</button>
            <button type="button" on:click={() => showModal = false} class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
        </form>
      </div>
    </div>
  {/if}