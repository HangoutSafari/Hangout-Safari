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
    import Time from "$lib/components/eventShow/Time.svelte";
    import Map from "$lib/components/eventPage/Map.svelte";
</script>

<main>
    <div class="upper-part bg-[url('/images/FoodAndDrinkDesignColour.svg')] bg-center">
        <div class="title">
            <TitleLabel />
            <JoinButton />
        </div>
        <HostLabel class="absolute top-[calc(50%+20px)] translate-y-[-80%] left-0 ml-12"/>
    </div>
    <div class="lower-part">
        <div class="left-part">
            <ParticipantsLabel />
            <Participants />
        </div>
        <div class="middle-part">
            <DescriptionLabel />
            <Description />
            <div class="time-container">
                <Time />
                <TimeData />
            </div>
        </div>
        <div class="right-part">
            <MapLabel />
            <Map />
        </div>
    </div>
</main>

<style>
    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative; /* Needed to absolutely position HostLabel */
    }

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-top: 200px;
    }

    .upper-part {
        flex: 25;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .lower-part {
        flex: 3;
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: center;
        background-color: #cfcfcf64;
    }

    .left-part,
    .middle-part,
    .right-part {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 18px;
        gap: 15px;
    }

    .left-part {
        flex: 1.3;
        margin-top: 50px;
        margin-left: 30px;
    }

    .middle-part {
        flex: 1.6;
        margin-top: 35px;
        gap: 4px;
    }

    .right-part {
        flex: 1.8;
        margin-top: 35px;
        margin-right: 30px;
        align-self: stretch;
    }

    .time-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    
    
</style>
