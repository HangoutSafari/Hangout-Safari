<script lang="ts" >
    import { createSearchStore, searchHandler } from "$lib/stores/Searchstore";
    import {  onDestroy } from "svelte";
  import { AnimalsModels } from "../../../Safari/Types/AnimalModelsPathTypes";
  import Header from "../events/header.svelte";
  import SideBarItem from "./SideBarItem.svelte"


  export let header: any;
  export let animals = [];

  const searchData = animals.map((animal)=>({
    ...animal,
    searchProperties: `${AnimalsModels[animal.model_id].name} ${animal.animal_name} `
  }));

  console.log(searchData);
  const searachStore = createSearchStore(searchData);


  const unsubscribe = searachStore.subscribe((input)=> searchHandler(input));

  onDestroy(()=>{
    unsubscribe();
  })
</script>

<main class="sm:h-full w-full mt-6 lg:mt-0">
  <!-- Sidebar -->
  <aside
    class="font-sans w-full sm:h-full mr-4 bg-[#D9D9D9] text-gray-200 flex flex-col drop-shadow-lg"
  >
    <div class="sticky top-20">
      <!-- Header name -->
      <Header text="{header}" class="hidden sm:inline-block"/>

      <!-- Search bar-->
      <label
        for="search"
        class="mx-5 my-3 sm:m-5 h-8 bg-[#BBBBBB] flex items-center rounded-xl focus-within:border-4 border-sky-400/30"
      >
        <i class="fas fa-search mx-2" />
        <input
          type="text"
          id="search"
          placeholder="Search..."
          bind:value={$searachStore.search}
          class="outline-none border-none bg-transparent placeholder-gray-200"
        />
        
      </label>
    </div>
    <div class="flex flex-row h-[full] lg:flex-col mt-7 lg:mt-0 sm:w-full gap-3 overflow-y-none overflow-x-auto md:overflow-y-none md:overflow-x-auto lg:overflow-x-cip lg:overflow-y-auto items-center ">
      {#each $searachStore.filtered as animal }
      <SideBarItem 
          name={AnimalsModels[animal.model_id].name}
          animalImage={AnimalsModels[animal.model_id].imagePath}
          locationObtained={animal.title}
          dateObtained = {animal.attended_at} 
          rarity = {AnimalsModels[animal.model_id].rarity}
          on:sideBarItemClicked/>
      {/each}
    </div>
  </aside>
</main>
