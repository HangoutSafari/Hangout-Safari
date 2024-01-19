<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let animalImage: string;
  export let locationObtained: string;
  export let dateObtained: string;
  export let rarity: string;
  export let name: string;

  const dispatcher = createEventDispatcher();

  function sideBarItemClicked() {
    dispatcher("sideBarItemClicked", {
      name: name,
      achievedFrom: locationObtained,
      image: animalImage,
      rarity: rarity,
    });
  }
</script>

<button
  class="flex flex-row justify-items-center shadow-lg p-2 md:container w-full lg:w-[90%] rounded-2xl bg-white hover:scale-110 duration-150 hover:cursor-grab"
  on:click={sideBarItemClicked}
>
  <div class="flex flex-col w-[120px] lg:w-1/3 h-[80px] lg:h-[100px] shadow-lg">
    <div />
    <img
      src={animalImage}
      alt="Profile Image"
      class="w-full object-contain bg-orange-400 rounded-lg p-1 h-full align-bottom"
    />
  </div>
  <div class="hidden flex-col lg:flex lg:flex-col ml-10 items-center w-2/3">
    <div class="flex flex-col w-full justify-start">
      <h2 class="text-2xl w-full text-left text-gray-400">{name}</h2>
      <div
        class="flex text-sm gap-2 content-around pt-1 text-black text-opacity-40"
      >
        <div class="flex justify-items-start">
          <div class="flex">
            <i class="mr-2 fa-solid fa-calendar" />
            <p class="text-ellipsis">{dateObtained}</p>
          </div>
        </div>
      </div>
      <div
        class="flex text-sm gap-2 content-around pt-1 text-black text-opacity-40"
      >
        <div class="flex justify-items-end">
          <div class="flex">
            <i class=" mr-2 fa-solid fa-location-dot" />
            <p class="text-ellipsis">{locationObtained}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</button>
