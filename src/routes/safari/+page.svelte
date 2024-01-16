<script>
  import RenderingContext from "$lib/components/safariPage/renderingContext.svelte";
  import SideNavbar from "$lib/components/safariPage/Sidebar.svelte";
  import PopupDebug from "$lib/components/safariPage/popupDebug.svelte";
  import Popup from "$lib/components/safariPage/popup.svelte";
  import { onMount } from "svelte";

  
  export let data;

  let rarity;
  let achievedFrom;
  let name;
  let image;
  let animalSelected = false;

  function onAnimalSelected(event) {
      animalSelected = true;
      rarity = event.detail.rarity;
      achievedFrom = event.detail.achievedFrom;
      name = event.detail.name;
      image = event.detail.image;
      animalSelected = true;
    }

    function closePopup(){
      if(animalSelected)
      animalSelected = false;
      
    }

</script> 

<div on:mousedown={closePopup} class="h-[90%] w-[100%] flex flex-col lg:flex-row md:flex-row items-center background overflow-x-none overflow-y-none">
  <div class="sm:h-full w-full lg:w-[27%] md:w-[27%] self-start">
    <SideNavbar on:sideBarItemClicked={onAnimalSelected} header="Animals" animals={data.animals} />
  </div>
  <div class="h-full flex flex-col justify-center items-center w-full p-4 lg:p-10">
    <RenderingContext on:showAnimal={onAnimalSelected} availableAnimals={data.animals}/>
    
    {#if animalSelected}
      <div class="absolute text-center w-[80%] sm:w-full">
        <Popup on:closePopup={closePopup} rarity={rarity} achievedFrom={achievedFrom} name={name} image={image}></Popup>
      </div>
    {/if}
    
  </div>  
</div>

<style>
</style>
