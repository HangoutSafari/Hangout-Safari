<script lang="ts">
  import { Safari } from "../../../Safari/Safari";
  import { onMount } from "svelte";
  let renderingContext: HTMLCanvasElement;
  onMount(() => {
    console.log(renderingContext);
    const safari = new Safari(renderingContext, "models/savana2.glb");
    safari.start();
  });
</script>

<div id="dimentionHelper" class="sm:w-[70%] lg:w-1/2 h-[90%] border-red-400 self-center border-4">
  <canvas class="w-full h-full" bind:this={renderingContext} ></canvas>  
</div>