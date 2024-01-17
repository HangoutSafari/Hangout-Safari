<script lang="ts">
  import UserInformationContainer from "$lib/components/dashboard/UserInformationContainer.svelte";
  import FeedContainer from "$lib/components/dashboard/feedContainer.svelte";
  import UpcomingContainer from "$lib/components/dashboard/upcomingContainer.svelte";
  import InformationCard from "$lib/components/profilePage/informationCard.svelte";
  // export let data: PageData;
</script>

<div class="flex flex-col md:flex-row items-center justify-between background pt-4">
  
  <div class="drop-shadow-lg order-2 align-middle items-center mt-4 md:mt-0 md:order-none w-[390px] md:p-2 md:pl-2">
    <FeedContainer />
  </div>
  
  <div class="order-3 md:order-none md:p-2 justify-center">
    <UserInformationContainer />
    
  </div>

  <div class="order-1 drop-shadow-lg md:order-none w-full overflow-x-auto md:w-[390px] md:p-2 md:pr-2">
    <UpcomingContainer />
  </div>
  
</div>

<style>
</style>
