<script lang="ts">
  import UserInformationContainer from "$lib/components/dashboard/UserInformationContainer.svelte";
  import FeedContainer from "$lib/components/dashboard/feedContainer.svelte";
  import UpcomingContainer from "$lib/components/dashboard/upcomingContainer.svelte";

  export let data;
  let users = data.users;

</script>

<!-- <meta name="viewport" content="" /> -->

<div class="grid sm:flex items-center justify-between pt-4">
  
  <div class="drop-shadow-lg order-2 sm:order-none w-[390px] sm:pl-4">
    <FeedContainer
    users= {users}
     />
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
