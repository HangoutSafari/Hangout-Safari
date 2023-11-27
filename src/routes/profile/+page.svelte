<script lang="ts">
  import AnimalContainer from "$lib/components/profilePage/animalContainer.svelte";
  import EventContainer from "$lib/components/profilePage/eventContainer.svelte";
  import InformationCard from "$lib/components/profilePage/informationCard.svelte";
  import ProfileCard from "$lib/components/profilePage/profileCard.svelte";
  import SettingsCard from "$lib/components/profilePage/settingsCard.svelte";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  let settings;
  let animals;
  let information;
  let showSettings = true;
  let showAnimals = false;
  let showInformation = false;
  onMount(() => {
    settings.addEventListener("click", () => {
      changeContent(true, false, false);
    });
    animals.addEventListener("click", () => {
      changeContent(false, true, false);
    });
    information.addEventListener("click", () => {
      changeContent(false, false, true);
    });
  });
  function changeContent(
    settings: boolean,
    animals: boolean,
    information: boolean
  ) {
    showSettings = settings;
    showAnimals = animals;
    showInformation = information;
  }

  export let data: PageData;
</script>

<!-- <meta name="viewport" content="" /> -->

<div class="w-full">
  <div
    class=" mt-5 grid grid-cols-1 lg:grid-cols-3 justify-items-center text-2xl gap-y-4"
  >
    <p class=" font-bold hidden lg:block">Profile</p>
    <p class=" font-bold hidden lg:block">Settings</p>
    <p class=" font-bold hidden lg:block">Information</p>

    <div
      class="w-[90%] lg:w-auto flex justify-center lg:block h-[25rem] lg:h-auto"
    >
      <ProfileCard />
    </div>
    <div class="hidden lg:block">
      <SettingsCard />
    </div>
    <div class="hidden lg:block">
      <InformationCard />
    </div>
  </div>

  <div
    class="grid grid-cols-3 place-items-center mt-5 text-[1.5rem] lg:text-[3rem] lg:hidden py-5"
  >
    <p bind:this={settings}>Settings</p>
    <p bind:this={animals}>Animals</p>
    <p bind:this={information}>Information</p>
  </div>

  {#if showSettings}
    <div class="flex justify-center py-10 lg:hidden">
      <div class="w-[95%]">
        <SettingsCard />
      </div>
    </div>
  {/if}
  {#if showAnimals}
    <div class=" flex justify-center py-10 lg:hidden">
      <div class="w-[95%]">
        <AnimalContainer />
      </div>
    </div>
  {/if}
  {#if showInformation}
    <div class="flex justify-center py-10 lg:hidden">
      <div class="w-[95%]">
        <InformationCard />
      </div>
    </div>
    <div class=" flex justify-center py-10 lg:hidden">
      <div class="w-[95%]">
        <EventContainer />
      </div>
    </div>
  {/if}

  <div class="hidden lg:block">
    <div class="flex justify-center lg:block">
      <h2 class=" text-2xl font-bold mt-10 mb-5 lg:y-5 lg:ml-14">Animals</h2>
    </div>
    <div class=" flex justify-center lg:block">
      <div class="lg:ml-14 lg:mr-14 w-[90%] lg:w-auto">
        <AnimalContainer />
      </div>
    </div>

    <div class="flex justify-center lg:block">
      <h2 class=" text-2xl font-bold mt-10 mb-6 lg:y-5 lg:ml-14">My events</h2>
    </div>

    <div class=" flex justify-center lg:block pb-10">
      <div class="lg:ml-14 lg:mr-14 lg:w-auto">
        <EventContainer />
      </div>
    </div>
  </div>
</div>

<style>
</style>
