<script>
  import RenderingContext from "$lib/components/safariPage/renderingContext.svelte";
  import AnimalList from "$lib/components/safariPage/animalList.svelte";
</script>

<div
  class="w-[100%] mt-6 lg:mt-0 h-full sm:h-[80%] gap-3 flex flex-col lg:flex-row items-center background overflow-y-none"
>
<div class="flex flex-col items-center">
  <AnimalList />
</div>
  <div class="flex flex-col w-full h-[85%] lg:h-full">
    <RenderingContext />
  </div>
</div>

<style>
</style>
