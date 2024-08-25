<script lang="ts">
    import { useChat } from '@ai-sdk/svelte';
    export let data;
    const { input, handleSubmit, messages } = useChat({body: {files:data?.files}});
    let showChat = false

    const handleMessageClick = (question: string) => {
      $input = question;
      showChat = true;
      handleSubmit()
    }
  </script>
  
  <main>
    {showChat}

    <button
    class="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
    type="button" on:click={() => showChat = !showChat} >
    <svg xmlns=" http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="text-white block border-gray-200 align-middle">
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" class="border-gray-200">
      </path>
    </svg>
  </button>

 {#if showChat}
  <div style="box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);"
    class="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white  rounded-lg border border-[#e5e7eb] w-[440px] h-[80%]">

    <!-- Heading -->
    <div class="flex flex-col space-y-1.5 p-6 py-4 border-b">
      <h2 class="font-semibold text-lg tracking-tight">{data.title}</h2>
      <p class="text-sm text-[#6b7280] leading-3">{data?.description ?? 'Lets talk about ' + data.title}</p>
    </div>




    <!-- Chat Container -->
    <div class="pr-4 h-full  overflow-y-auto p-6 relative" style="max-height: calc(100% - 150px);">
      <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
        class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
        <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="1.5"
            viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
            </path>
          </svg></div>
      </span>
      <p class="leading-relaxed"><span class="block font-bold text-gray-700">AI </span>Hi, how can I help you today?
      </p>
    </div>
    

    {#each $messages as message}
    {#if message.role == 'assistant'}
      <!-- Chat Message AI -->
      <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
          class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="1.5"
              viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
              </path>
            </svg></div>
        </span>
        <p class="leading-relaxed"><span class="block font-bold text-gray-700">AI </span>{message.content}
        </p>
      </div>
      {:else }

      <!--  User Chat Message -->
      <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
          class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="0"
              viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z">
              </path>
            </svg></div>
        </span>
        <p class="leading-relaxed"><span class="block font-bold text-gray-700">You </span>{message.content}</p>
      </div>
      {/if}
      {/each}
    </div>
    <!-- Input box  -->
    <div class="flex items-center bg-gray-300 p-4 absolute w-full bottom-0 ">
      <form on:submit={handleSubmit} class="flex items-center justify-center w-full space-x-2">
        <input
        bind:value={$input}
          class="flex w-full h-10 bg-gray-400 rounded-sm shadow-sm p-1"
          placeholder="Type your message" /> 
        <button
        type="submit"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
          Send</button>
      </form>
    </div>

  </div> 
  {:else} 
  <div  class="fixed bottom-24 right-4 max-w-96 ">

    <ol reversed class="flex flex-col gap-2 items-end px-2 text-right">
      <li on:click={() => handleMessageClick('where are you?')} class="p-2 rounded-md w-56 bg-gray-500 float-end">where are you ?</li>
      <li class="p-2 rounded-md w-96 bg-gray-500 float-end">hello</li>
      
      
    </ol>
  </div>
  {/if}
   
    <!-- <ul>
      {#each $messages as message}
        <li>{message.role}: {message.content}</li>
      {/each}
    </ul>
    <form on:submit={handleSubmit}>
      <input bind:value={$input} />
      <button type="submit">Send</button>
    </form> -->
  </main>