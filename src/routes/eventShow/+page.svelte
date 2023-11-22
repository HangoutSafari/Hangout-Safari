<script>
    import ParticipantsLabel from "$lib/components/eventShow/ParticipantsLabel.svelte";
    import DescriptionLabel from "$lib/components/eventShow/DescriptionLabel.svelte";
    import Participants from "$lib/components/eventShow/Participants.svelte";
    import Description from "$lib/components/eventShow/Description.svelte";
    import TitleLabel from "$lib/components/eventShow/TitleLabel.svelte";
    import JoinButton from "$lib/components/eventShow/JoinButton.svelte";
    import HostLabel from "$lib/components/eventShow/HostLabel.svelte";
    import TimeData from "$lib/components/eventShow/TimeData.svelte";
    import MapLabel from "$lib/components/eventShow/MapLabel.svelte";
    import TimeLabel from "$lib/components/eventShow/TimeLabel.svelte";
    import Map from "$lib/components/eventPage/Map.svelte";
</script>

<main class="min-h-screen flex flex-col relative">
    <div class="flex flex-grow bg-[url('/images/FoodAndDrinkDesignColour.svg')] bg-center flex-col items-center justify-center w-full">
        <div class="flex flex-col items-center gap-5 mt-60"> 
            <TitleLabel />
            <JoinButton />
        </div>
        <HostLabel class="absolute top-[calc(50%+20px)] translate-y-[-80%] left-0 ml-12"/>
    </div>
    <div class="flex flex-3 w-full items-stretch justify-center bg-[#cfcfcf64]">
        <div class="flex flex-col items-center justify-start p-4 gap-4 flex-1 mt-16 ml-7">
            <ParticipantsLabel />
            <Participants />
        </div>
        <div class="flex flex-col items-center justify-start p-4 gap-1 flex-1 mt-9">
            <DescriptionLabel />
            <Description />
            <div class="flex flex-row justify-center items-center gap-5 basis-1/5">
                <TimeLabel />
                <TimeData />
            </div>
        </div>
        <div class="flex flex-col items-center justify-start self-stretch p-4 gap-4 flex-1 mt-9 mr-7">
            <MapLabel />
            <Map />
        </div>
    </div>
</main>
