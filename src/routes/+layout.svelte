<script lang="ts">
    import "../app.css"
    import { Toaster } from "$lib/components/ui/sonner";
    import SideNav from "$lib/components/side_nav.svelte"
</script>

<SideNav />

 <main>
    <div class=" max-w-screen-2xl mx-auto h-max px-6 md:px-12 xl:px-6">
        <div class="p-4 sm:ml-64">
            <slot />
        </div>
    </div>
 </main>

   
  <Toaster />
 