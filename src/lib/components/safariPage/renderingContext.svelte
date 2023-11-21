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

<canvas bind:this={renderingContext} class="lg:w-[70%] w-full h-[90%] border-black self-center border-2"></canvas>