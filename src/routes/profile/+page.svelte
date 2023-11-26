<script lang="ts">
    // import AnimalCard from "$lib/components/profilePage/animalCard.svelte";
    import AnimalContainer from "$lib/components/profilePage/animalContainer.svelte";
    import EventContainer from "$lib/components/profilePage/eventContainer.svelte";
    import InformationCard from "$lib/components/profilePage/informationCard.svelte";
    import ProfileCard from "$lib/components/profilePage/profileCard.svelte";
    import SettingsCard from "$lib/components/profilePage/settingsCard.svelte";
    import type { PageData } from "./$types";

    // export let data: PageData;
</script>

<meta name="viewport" content="" />

<div class="w-full">
    
    
    <div class=" grid grid-cols-3 justify-items-center text-2xl gap-y-4">
        <p class=" font-bold">Profile</p>
        <p class=" font-bold">Settings</p>
        <p class=" font-bold">Information</p>
        
            <ProfileCard />
            <SettingsCard />
            <InformationCard />
        </div>
        <div class="flex justify-center lg:block">
            <h2 class=" text-2xl font-bold mt-10 mb-5 lg:y-5 lg:ml-14">Animals</h2>
        </div>
        <div class=" flex justify-center lg:block ">
            <div class="lg:ml-14 lg:mr-14 w-[80%] lg:w-auto">
                <AnimalContainer/>
            </div>
        </div>
        
        
        <div class="flex justify-center lg:block">
            <h2 class=" text-2xl font-bold mt-10 mb-6  lg:y-5 lg:ml-14">My events</h2>
        </div>

        <div class=" flex justify-center lg:block pb-10 ">
            <div class="lg:ml-14 lg:mr-14 w-[80%] lg:w-auto">
                <EventContainer />
            </div>
        </div>
        
    </div>

<style>
</style>
