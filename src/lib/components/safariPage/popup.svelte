<script>
    export let name;
    export let rarity;
    export let achievedFrom;
    export let image;

    function closePopup() {
    // Check if the event target is the close button before dispatching the closePopup event
    if (event.target.classList.contains('close-button')) {
      dispatch("closePopup");
    }
  }
</script>

<div class="inline-block">
    <div
      class="flex flex-col bg-gray-200 items-center content-center h-[14rem] lg:h-auto lg:w-[15rem] rounded-xl p-3 gap-1 font-Jaldi drop-shadow-lg"
    >
      <div class="flex items-center content-center gap-3">
        
        <button on:click={closePopup} class="close-button text-red-600">
          <i class="fa-regular fa-circle-xmark fa-xl"></i>
        </button>
        
        <div>
          <input
          class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder={name}
          required
          on:click|stopPropagation
          />
        </div>
        <i class="fa-solid fa-pen text-gray-400"></i>

      </div>
      <img class="h-[5rem] lg:h-auto" src={image} alt="" />
      <div class="flex flex-col gap-0 items-center">
        <p class=" mb-0 pb-0 font-bold text-[1rem] lg:text-base">Achieved from:</p>
        <p class=" pt-0 mt-0 text-[0.8em] lg:text-base">{achievedFrom}</p>
      </div>
      <p
        class="text-[1rem] lg:text-2xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#C51FFF] to-[#FF00E5]">
        {rarity}
      </p>
    </div>
  </div>