<script>
    import ParticipantsLabel from "$lib/components/eventPage/ParticipantsLabel.svelte";
    import DescriptionLabel from "$lib/components/eventPage/DescriptionLabel.svelte";
    import Participants from "$lib/components/eventPage/Participants.svelte";
    import Description from "$lib/components/eventPage/Description.svelte";
    import TitleLabel from "$lib/components/eventPage/TitleLabel.svelte";
    import JoinButton from "$lib/components/eventPage/JoinButton.svelte";
    import HostLabel from "$lib/components/eventPage/HostLabel.svelte";
    import TimeData from "$lib/components/eventPage/TimeData.svelte";
    import MapLabel from "$lib/components/eventPage/MapLabel.svelte";
    import TimeLabel from "$lib/components/eventPage/TimeLabel.svelte";
    import Map from "$lib/components/eventPage/Map.svelte";

    export let data;
    console.log(data);
</script>

<main class="min-h-screen flex flex-col lg:mt-0 mt-4">
    <div class="flex flex-grow bg-[url('/images/FoodAndDrinkDesignColour.svg')] bg-center flex-col items-center justify-center w-full relative">
        <div class="flex flex-col items-center gap-5 mt-60 mb-8 lg:mb-0">
            <TitleLabel />
            <JoinButton />
        </div>
        <HostLabel class="absolute bottom-[-20%] translate-y-[-80%] left-0 ml-4 mm:ml-12"/>
    </div>
    <div class="flex flex-col lg:flex-row flex-3 w-full items-stretch justify-center bg-[#f2f2f2] sm:mt-4">
        <div class="flex flex-col items-center justify-start p-4 gap-3 flex-1 mt-9 ml-0 lg:ml-7 mm:mt-2 xs:mt-10">
            <ParticipantsLabel />
            <Participants />
        </div>
        <div class="flex flex-col items-center justify-start p-4 gap-1 flex-1 mt-9 xs:mt-1">
            <DescriptionLabel class="w-full" />
            <Description class="w-full mb-6 sm:mb-4" />
            <div class="block sm:hidden w-full h-4"></div>
            <div class="flex flex-col sm:flex-row justify-center items-stretch gap-3 w-full">
                <TimeLabel class="w-full text-center sm:basis-2/6 sm:text-left" />
                <TimeData class="w-full text-center sm:basis-4/6 sm:text-left" />
            </div>
        </div>        
        <div class="flex flex-col items-center justify-start self-stretch p-4 gap-3 flex-1 mt-9 mr-0 lg:mr-7 xs:mt-1">
            <MapLabel />
            <Map class="min-h-[200px] lg:min-h-[0] min-w-full" />
        </div>
    </div>
    
</main>

