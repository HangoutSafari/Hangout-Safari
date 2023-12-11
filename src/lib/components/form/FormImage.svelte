<script>
  let underlined = true;
  let src;
  function changeImage(event) {
    src = URL.createObjectURL(event.target.files[0]);
  }
</script>

<div class="{$$props.class} w-full">
  <div>
    <i
      class="fa-solid fa-image absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"
    />
    <input
      on:blur={() => (underlined = true)}
      on:click={() => (underlined = false)}
      on:change={changeImage}
      type="file"
      id="image"
      accept=".png, .jpg, .jpeg"
      class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400"
    />
    {#if underlined}
      <hr class="border-2 rounded border-orange-400" />
    {/if}
    {#if !underlined}
      <hr class="border-2 rounded border-transparent" />
    {/if}
  </div>
  <div>
    <img
      {src}
      class="h-[200px] w-full"
      alt="Your face will appear here once you select a file showing it"
    />
  </div>
</div>
