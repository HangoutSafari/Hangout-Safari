<script>
  let underlined = true;
  export let id;
  export let value = "00:00";
</script>

<div class="{$$props.class} w-full">
  <i
    class="fa-regular fa-clock absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"
  />
  <input
    on:blur={() => (underlined = true)}
    on:click={() => (underlined = false)}
    type="time"
    {id}
    {value}
    class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400 bg-transparent"
  />
  {#if underlined}
    <hr class="border-2 rounded border-orange-400" />
  {/if}
  {#if !underlined}
    <hr class="border-2 rounded border-transparent" />
  {/if}
</div>
