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

<div id="dimentionHelper" class="w-screen lg:w-[70%] h-[90%] border-red-400 self-center flex flex-col items-center border-4">
  <canvas class="w-full h-full" bind:this={renderingContext} ></canvas>  
</div>