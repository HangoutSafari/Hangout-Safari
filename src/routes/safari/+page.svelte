<script>
  import RenderingContext from "$lib/components/safariPage/renderingContext.svelte";
  import AnimalList from "$lib/components/safariPage/animalList.svelte";
</script>

<div
  class="w-[100%] h-full sm:h-[100%] flex flex-col lg:flex-row items-center background overflow-y-none"
>
  <div class="flex flex-col w-full h-[90%]">
    <RenderingContext />
  </div>
  <div class="flex flex-col items-start">
    <AnimalList />
  </div>
</div>

<style>
</style>
