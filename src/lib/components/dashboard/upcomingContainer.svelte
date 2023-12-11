<script>
    import Eventcard from "../events/eventcard.svelte";

</script>
<div class="grid grid-cols-2 sm:grid-cols-1 gap-6 p-4 sm:rounded-2xl bg-white ">
    {#each { length: 2 } as _, i}
    <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
    />
  {/each}
</div>