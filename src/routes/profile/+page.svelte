<script lang="ts">
    import AnimalCard from "$lib/components/profilePage/animalCard.svelte";
    import AnimalContainer from "$lib/components/profilePage/animalContainer.svelte";
    import EventContainer from "$lib/components/profilePage/eventContainer.svelte";
    import InformationCard from "$lib/components/profilePage/informationCard.svelte";
    import ProfileCard from "$lib/components/profilePage/profileCard.svelte";
    import SettingsCard from "$lib/components/profilePage/settingsCard.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

    
        <div class=" grid grid-cols-3 justify-items-center text-2xl gap-y-4">
            <p class=" font-bold">Profile</p>
            <p class=" font-bold">Settings</p>
            <p class=" font-bold">Information</p>

            <ProfileCard />
            <SettingsCard />
            <InformationCard />
        </div>

        <h2 class="text-2xl font-bold my-5 ml-14">Animals</h2>
        
            <div class="lg:ml-14 lg:mr-14 mx-auto justify-self-center">
                <AnimalContainer/>
            </div>


        <h2 class="text-2xl font-bold my-5 ml-14">My events</h2>

        <div class="mt-5 ml-14 mr-12">
             <EventContainer />
        </div>


<style>
    body {
        background-color: #f2f2f2;
    }
</style>
