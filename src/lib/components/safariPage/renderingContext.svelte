<script lang="ts">
  import { Safari } from "../../../Safari/Safari";
  import { onMount } from "svelte";
  let renderingContext: HTMLElement;
  onMount(() => {
    console.log(renderingContext);
    const safari = new Safari(renderingContext, "models/savana2.glb");
    safari.start();
  });
</script>

<canvas
  bind:this={renderingContext}
  class="h-1/2 w-1/2 border-black self-center border-2"
/>
