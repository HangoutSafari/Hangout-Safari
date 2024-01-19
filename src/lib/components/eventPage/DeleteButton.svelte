<script>
  let showPopup = false;
  function handleClick() {
    showPopup = true;
  }
</script>

<button
  class=" text-white mr-2 bg-red-500 rounded-xl px-7 py-2 md:px-10 md:py-3 font-bold text-xl mb-1 md:mb-3 md:mr-4 uppercase cursor-pointer shadow-[0_4px_6px_rgba(117,106,106,0.8)] transition-all duration-300 ease-in-out"
  on:click={handleClick}
>
  DELETE
</button>

{#if showPopup}
  <form
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
    method="POST"
    action="?/delete"
  >
    <div class="background p-10 rounded shadow-xl">
      <p class="text-lg">Are you sure you want to delete this?</p>
      <div class="flex justify-between mt-4 font-bold">
        <button type="submit" class="bg-green-500 text-white py-2 px-5 rounded">
          YES
        </button>
        <button
          class="bg-red-500 text-white py-2 px-5 rounded"
          on:click={() => (showPopup = false)}>NO</button
        >
      </div>
    </div>
  </form>
{/if}
