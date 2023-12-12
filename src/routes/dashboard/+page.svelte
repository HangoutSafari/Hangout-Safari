<script lang="ts">
  import UserInformationContainer from "$lib/components/dashboard/UserInformationContainer.svelte";
  import FeedContainer from "$lib/components/dashboard/feedContainer.svelte";
  import UpcomingContainer from "$lib/components/dashboard/upcomingContainer.svelte";
  import InformationCard from "$lib/components/profilePage/informationCard.svelte";
  import type { PageData } from "./$types";
  // export let data: PageData;
</script>

<!-- <meta name="viewport" content="" /> -->

<div class="grid sm:flex justify-between pt-4">
  
  <div class="drop-shadow-lg order-2 sm:order-none w-[390px] sm:pl-4">
    <FeedContainer />
  </div>
  
  <div class="order-3 sm:order-none sm:flex justify-center">
    <UserInformationContainer />
  </div>

  <div class="order-1 drop-shadow-lg sm:order-none overflow-x-auto w-full sm:w-[390px] sm:pr-4">
    <UpcomingContainer />
  </div>
  
</div>

<style>
</style>
