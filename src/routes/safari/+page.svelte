<script>
  import RenderingContext from "$lib/components/safariPage/renderingContext.svelte";
  import SideNavbar from "$lib/components/events/sidebar.svelte";
  </script>

<div
  class="h-full w-[100%] flex flex-col lg:flex-row items-center background overflow-x-none overflow-y-none"
>
<div class="sm:h-full self-start">
  <SideNavbar />
</div>
  <div class="h-full flex flex-col w-full">
    <RenderingContext />
  </div>
</div>

<style>
</style>
