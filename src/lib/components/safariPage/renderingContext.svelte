<script lang="ts">
  import { Safari } from "../../../Safari/Safari";
  import { onMount } from "svelte";
  let renderingContext: HTMLCanvasElement;
  onMount(() => {
    console.log(renderingContext);
    const safari = new Safari(renderingContext, "models/savana2.glb");
    safari.start();
    document.addEventListener("keypress", function(event) {
            if (event.keyCode == 13) {
              safari.ground.addChunk();   
            }
          });
  });
</script>

<div id="dimentionHelper" class=" w-full lg:w-[90%] h-full lg:h-full border-red-400 self-center flex flex-col items-center">
  <canvas class="w-full h-full rounded-md shadow-xl" bind:this={renderingContext} ></canvas>  
</div>  