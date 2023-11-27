<script>
  import RenderingContext from "$lib/components/safariPage/renderingContext.svelte";
  import AnimalList from "$lib/components/safariPage/animalList.svelte";
</script>

<div class="w-[100%] flex flex-col lg:flex-row items-center background overflow-x-none overflow-y-none ">
  <div class="flex flex-col w-full ">
    <RenderingContext />
  </div>
  <div class="flex flex-col items-start  ">  
    <AnimalList/> 
  </div>
</div>

<style>
</style>
