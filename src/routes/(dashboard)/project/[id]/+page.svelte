<script>
	import FileUpload from '$lib/components/file_upload.svelte';
	import ProjectFiles from '$lib/components/project_files.svelte';
	export let data;
</script>

<FileUpload />

<ProjectFiles files={data.files} />
