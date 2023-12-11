<script lang="ts">
  import UserInformationContainer from "$lib/components/dashboard/UserInformationContainer.svelte";
import FeedContainer from "$lib/components/dashboard/feedContainer.svelte";
    import InformationCard from "$lib/components/profilePage/informationCard.svelte";
  import type { PageData } from "./$types";
  // export let data: PageData;
</script>

<!-- <meta name="viewport" content="" /> -->

<div class="sm:grid grid-cols-3 pt-8">
  
  <div class="w-[390px] sm:pl-8">
    <FeedContainer />
  </div>
  
  <div class="sm:flex justify-center">
    <UserInformationContainer />
  </div>
  
</div>

<style>
</style>
