<script lang="ts">
	import { enhance } from "$app/forms";

    let file;
    let submitBtn:HTMLElement;

  
    function handleFileUpload() {
     submitBtn.click()
    }
  </script>
  
  <style>
    .file-input {
      border: 2px solid #e5e7eb; /* Tailwind's gray-200 */
      border-radius: 0.375rem; /* Tailwind's rounded-md */
      padding: 0.5rem; /* Tailwind's p-2 */
    }
  </style>

  
  <form method="POST" action="?/create" enctype="multipart/form-data" use:enhance>

      <div class="flex flex-col items-center p-4">
          <label for="fileInputLable" class="block text-lg font-medium text-gray-700">Upload File</label>
          <input
          id="fileInputLable"
          type="file"
          name="file"
          class="file-input mt-2 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
        file:rounded-md file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-50 file:text-blue-700
        hover:file:bg-blue-100"
        on:change={handleFileUpload}
        />
        <button class="hidden" bind:this={submitBtn}>upload</button>
    </div>
</form>

  