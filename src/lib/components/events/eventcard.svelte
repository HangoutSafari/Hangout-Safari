<script>
    export let eventImage;
    export let eventTitle;
    export let eventDate;
    export let eventLocation;
</script>

<div class="flex flex-col items-center gap-2 drop-shadow-lg bg-slate-100 rounded-lg transition ease-in-out delay-150 hover:scale-110">

    <!-- Image inside card-->
    <div class="h-[135px] w-full">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
            src={eventImage}
            alt="Event Image"
            class="object-cover w-full h-full rounded-t-lg"/>
    </div>

    <!-- Event Title-->
    <div class="w-full">
        <h1 class="pl-4 text-lg">{eventTitle}</h1>
    </div>

    <!-- Date and Location-->
    <div class="w-full flex flex-row items-center py-2 text-[#565656]/75">
        <div class="flex flex-row items-center justify-between w-full g-4">

            <!-- Event Date - Left Half -->
            <div class="w-1/2 flex items-center">
                <i class="mr-4 fa-solid fa-calendar fa-lg ml-4" />
                <h1 class="text-sm">{eventDate}</h1>
            </div>

            <!-- Event Location - Right Half -->
            <div class="w-1/2 flex items-center justify-end">
                <i class="mr-4 fa-solid fa-location-dot fa-lg" />
                <h1 class="text-sm mr-4">{eventLocation}</h1>
            </div>

        </div>
    </div>

    <div class="px-4 pb-2 w-full h-full flex items-center justify-center">

        <!-- Join button -->
        <button
            class="h-6 w-full bg-[#BCBCBC] hover:bg-blue-500  duration-300 ease-in-out hover:drop-shadow flex items-center justify-center rounded-xl text-white text-sm self-center">
            Join now
        </button>
    
    </div>
</div>
