<script>
  export let id;
  export let type;
  export let icon;
  export let placeholder = "";
  export let accept = "";
  let underlined = true;
</script>

<div class="{$$props.class} w-[400px]">
  <i
    class="{icon} absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"
  />
  {#if type == "file"}
    <input
      on:blur={() => (underlined = true)}
      on:click={() => (underlined = false)}
      {type}
      {id}
      {accept}
      class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400"
    />
    {#if underlined}
      <hr class="border-2 rounded border-orange-400" />
    {/if}
    {#if !underlined}
      <hr class="border-2 rounded border-transparent" />
    {/if}
  {:else if type == "textarea"}
    <textarea
      {type}
      {id}
      rows="4"
      class="w-full px-7 py-2 outline-none ring ring-orange-400"
    >
      {placeholder}
    </textarea>
  {:else}
    <input
      on:blur={() => (underlined = true)}
      on:click={() => (underlined = false)}
      {type}
      {id}
      {placeholder}
      class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400 bg-transparent"
    />
    {#if underlined}
      <hr class="border-2 rounded border-orange-400" />
    {/if}
    {#if !underlined}
      <hr class="border-2 rounded border-transparent" />
    {/if}
  {/if}
</div>
