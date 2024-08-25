<script>
	import FileUpload from "$lib/components/file_upload.svelte";
	import ProjectDashCards from "$lib/components/project_dash_cards.svelte";
	import ProjectFiles from "$lib/components/project_files.svelte";
   import {toast} from "svelte-sonner"
   export let data;
   export let form;
   
   $: form, showNotification();

   function showNotification() {
      if(form?.body == 'success') {
         toast("Success", {
            description:"File uploaded successfuly"
            
         })
      }
      else if (form?.body == "error"){
         toast("Error", {
            description:"Error uploading your file"
         })
      }
   }
  
</script>
<h1 class=" text-2xl font-bold text-gray-900 capitalize my-10"> {data.title}</h1>
<ProjectDashCards />

<FileUpload />
<ProjectFiles files={data?.files} />


