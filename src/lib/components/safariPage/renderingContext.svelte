<script>
  import { Safari } from "../../../Safari/Safari";
  import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";
  import { AnimalEventDispatcher } from "../../../Safari/Animals/AnimalEventDispatcher";

  let renderingContext;

  const eventDispatcher = createEventDispatcher();
  const animalEventDispatcher = new AnimalEventDispatcher();

  onMount(() => {
    console.log(renderingContext);
    const safari = new Safari(renderingContext, "models/savana2.glb", animalEventDispatcher);
    safari.start();
    
    document.addEventListener("keypress", function (event) {
      if (event.keyCode == 13) {
        safari.safariGenerator.add();
      }
    });

  });

  animalEventDispatcher.addEventListener('showAnimal', function (event) {
    console.log("animal clicked on svelte component");
    eventDispatcher('showAnimal', { name: event.name, rarity: event.rarity, achievedFrom: event.achievedFrom });
  });
</script>

<div id="dimentionHelper" class="w-full lg:w-[90%] h-full lg:h-full border-red-400 self-center flex flex-col items-center">
  <canvas class="w-full h-full rounded-md shadow-xl" bind:this={renderingContext}></canvas>
</div>