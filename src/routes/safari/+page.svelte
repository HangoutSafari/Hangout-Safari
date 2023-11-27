<script>
  import RenderingContext from "$lib/components/safariPage/renderingContext.svelte";
  import AnimalList from "$lib/components/safariPage/animalList.svelte";
</script>

<div
  class="w-[100%] h-full sm:h-[100%] lg:p-20 gap-3 flex flex-col lg:flex-row items-center background overflow-y-none"
>
<div class="flex flex-col items-center mt-[4.5rem]">
  <AnimalList />
</div>
  <div class="flex flex-col w-full h-[85%] lg:h-full">
    <RenderingContext />
  </div>
</div>

<style>
</style>
