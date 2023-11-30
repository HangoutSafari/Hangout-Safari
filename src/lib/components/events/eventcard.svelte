<script>
    export let eventImage;
    export let eventTitle;
    export let eventDate;
    export let eventLocation;

    // Join Button
    let buttonBackgroundColor = 'bg-[#BCBCBC]';
    let buttonInnerText = 'Join now';
    let count = 0;
    
    // Changes join button's color and text when clicked
    function handleClick() {

        if (count == 0) {
            buttonBackgroundColor = 'bg-green-500';
            buttonInnerText = 'Joined!';
            count = 1;
        } else {
            buttonBackgroundColor = 'bg-[#BCBCBC]';
            buttonInnerText = 'Join now';
            count = 0;
        }
    }

</script>

<div class="flex flex-col lg:shrink-0 items-center gap-2 drop-shadow-lg bg-slate-100 rounded-lg transition ease-in-out delay-150 hover:scale-110">

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
    <div class="w-full flex sm:flex-row items-center py-2 text-[#565656]/75">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full g-4">

            <!-- Event Date -->
            <div class="sm:w-1/2 flex items-center">
                <i class="pl-4 sm:pl-0 mr-4 fa-solid fa-calendar fa-lg sm:ml-4" />
                <h1 class="text-sm mr-4 sm:mr-0">{eventDate}</h1>
            </div>

            <!-- Event Location -->
            <div class="sm:w-1/2 flex items-center sm:justify-end">
                <i class="pl-4 sm:pl-0 mr-4 fa-solid fa-location-dot fa-lg" />
                <h1 class="text-sm sm:mr-4">{eventLocation}</h1>
            </div>

        </div>
    </div>

    <div class="hidden px-4 pb-2 w-full h-full sm:flex items-center justify-center">

        <!-- Join button -->
        <a href="/events/1" class="block w-full">
            <button
                on:click={handleClick}
                class={`
                    ${buttonBackgroundColor} h-6 w-full
                    ${count === 0 ? 'hover:bg-blue-500 duration-300 ease-in-out hover:drop-shadow' : ''}
                    sm:flex items-center justify-center rounded-xl text-white text-sm self-center`}>
                {buttonInnerText}
            </button>
        </a>
    
    </div>
    
</div>
