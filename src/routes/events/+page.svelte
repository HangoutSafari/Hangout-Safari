<script>
  import Example from "$lib/components/Example.svelte";
  export let data;
  console.log(data);
</script>

<div>
  {#each data.items as animal}
    <div>
      <p><a href="/events/{animal.id}">{animal.name}</a> - {animal.Specie}</p>
      <br />
    </div>
  {/each}
</div>
