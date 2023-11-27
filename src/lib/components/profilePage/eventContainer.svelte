<script>
  import Eventcard from "../events/eventcard.svelte";
  import AnimalCard from "./animalCard.svelte";
</script>

<div class="flex flex-col bg-white rounded-md drop-shadow-lg gap-4 p-12">
  <div
    class=" grid grid-cols-1 lg:flex  lg:overflow-x-auto gap-7 pb-5 lg:py-10 lg:pl-5"
  >
    {#each { length: 10 } as _, i}
      <Eventcard
      eventImage="/zelda.jpeg"
      eventTitle="ART FAIR"
      eventDate="December 12th - 20th"
      eventLocation="Bibliotheek, Middelburg"
      />
    {/each}
  </div>
</div>

<style>
  ::-webkit-scrollbar {
    height: 13px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      rgba(255, 231, 0, 1) 0%,
      rgba(255, 0, 0, 1) 100%
    );
    border-radius: 5px;
  }
</style>
