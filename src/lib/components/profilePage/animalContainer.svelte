<script>
  import AnimalCard from "./animalCard.svelte";
</script>

<div class=" bg-white rounded-md p-5 drop-shadow-lg gap-4 py-12">
  <div
    class=" grid grid-cols-2 lg:flex lg:overflow-x-auto lg:flex-nowrap gap-7 pb-5"
  >
    {#each { length: 30 } as _, i}
      <AnimalCard />
    {/each}
  </div>
</div>

<style>
  ::-webkit-scrollbar {
    height: 13px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      rgba(255, 231, 0, 1) 0%,
      rgba(255, 0, 0, 1) 100%
    );
    border-radius: 5px;
  }
</style>
