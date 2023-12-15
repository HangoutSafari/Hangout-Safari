<script>
    import Eventcard from "../events/eventcard.svelte";
</script>

<div class="flex justify-center rounded-t-2xl pt-4 text-2xl bg-white border-b border-slate-300">
    
    <div>
        <h1 class="pb-2">Upcoming Events</h1>
        <div class="sm:h-1.5 sm:bg-gradient-to-r sm:from-yellow-400 sm:to-red-500"></div>

    </div>

</div>

<div class="sm:h-[566px] bg-white rounded-b-2xl">

    <div class="sm:h-[546px] sm:overflow-y-auto ">
    
        <div class="pt-4 sm:pt-0 flex flex-row sm:block overflow-x-scroll sm:overflow-x-hidden sm:overflow-y-scroll px-4 pb-4 sm:rounded-b-2xl bg-white">
            {#each { length: 3 } as _, i}
                <div class="sm:pt-6 px-4">
                    <Eventcard
                        eventImage="/zelda.jpeg"
                        eventTitle="ART FAIR"
                        eventDate="December 12th - 20th"
                        eventLocation="Bibliotheek, Middelburg"
                        buttonText="View"
                        buttonColor = 'bg-green-500';
                    />
                </div>
            {/each}
        </div>
    
    </div>

</div>
