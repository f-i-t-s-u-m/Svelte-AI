<script>
	import QuestionModal from "$lib/components/question_modal.svelte";
    let showModal = false
    export let form;
</script>
<div class="flex py-10">
    <div class="flex-1">
       <h1 class="text-2xl font-bold text-gray-800 pb-5">Add Questions</h1>
       <button on:click={() => showModal = !showModal} type="button" class="text-white uppercase bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create Question</button>
    </div>
    <div class="flex-1">
    </div>
</div>


<QuestionModal {form} showModal={showModal} />