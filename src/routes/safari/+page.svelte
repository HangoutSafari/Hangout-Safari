<script>
  import RenderingContext from "$lib/components/safariPage/renderingContext.svelte";
  import SideNavbar from "$lib/components/safariPage/sidebar.svelte";
  </script>

<div
  class="h-[90%] w-[100%] flex flex-col lg:flex-row md:flex-row items-center background overflow-x-none overflow-y-none"
>
  <div class="sm:h-full w-full lg:w-[27%] md:w-[27%] self-start">
    <SideNavbar />
  </div>
  <div class="h-full flex flex-col w-full p-4 lg:p-10">
    <RenderingContext  />
  </div>
</div>

<style>
</style>
