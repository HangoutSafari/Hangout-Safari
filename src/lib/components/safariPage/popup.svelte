<script>
    import {createEventDispatcher} from "svelte"
    export let name;
    export let rarity;
    export let achievedFrom;
    export let image;

    let textColor = "";

    switch (rarity) {
  case "common":
    // black
    textColor = "bg-gray-400";
    break;
  case "epic":
    // purple
    textColor = "bg-gradient-to-br from-[#C51FFF] to-[#FF00E5]";
    break;
  case "uncommon":
    // green
    textColor = "bg-gradient-to-br from-[#0ee006] to-[#28ff5e]";
    break;
  case "rare":
    // blue
    textColor = "bg-gradient-to-br from-[#04daeb] to-[#0eb6d1]";
    break;
  default:
    // Handle cases where rarity is not one of the expected values
    textColor = "bg-black"; // Replace with your default color
    break;
}
    console.log(rarity);

    const dispatch = createEventDispatcher();

    function closePopup() {
      dispatch("closePopup");
    }
</script>

<div class="inline-block">
    <div
      class="flex flex-col bg-gray-200 items-center content-center h-[14rem] lg:h-auto lg:w-[15rem] rounded-xl p-3 gap-1 font-Jaldi drop-shadow-lg">
      <div class="flex items-center content-center gap-3">
        
        <button on:click={closePopup} class="close-button text-red-600">
          <i class="fa-regular fa-circle-xmark fa-xl"></i>
        </button>
        
        <div>
          <input
          class="text-center bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
          placeholder={name}
          required
          disabled
          on:click|stopPropagation
          />
        </div>
      </div>
      <img class="h-[5rem] lg:h-auto" src={image} alt=""/>
      <div class="flex flex-col gap-0 items-center">
        <p class=" mb-0 pb-0 font-bold text-[1rem] lg:text-base">Achieved from:</p>
        <p class=" pt-0 mt-0 text-[0.8em] lg:text-base">{achievedFrom}</p>
      </div>
      <p
        class="text-[1rem] lg:text-2xl font-bold inline-block text-transparent bg-clip-text shadow-2xl {textColor}">
        {rarity}
      </p>
    </div>
  </div>