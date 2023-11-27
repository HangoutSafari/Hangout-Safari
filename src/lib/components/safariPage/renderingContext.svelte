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

<div id="dimentionHelper" class=" w-full lg:w-[70%] h-full lg:h-full border-red-400 self-center flex flex-col items-center">
  <canvas class="w-full h-full" bind:this={renderingContext} ></canvas>  
</div>  