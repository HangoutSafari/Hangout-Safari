<script>
  import SideNavBar from "$lib/components/events/sidebar.svelte";
  import Eventcard from "$lib/components/events/eventcard.svelte";

  import { goto } from '$app/navigation';
  
  function navigateToCreateEvent() {
    goto('/events/create');
  }

  export let data;
  console.log(data);
</script>

<main class="bg-[#e7e4e4] xs:mt-3">
  <div class="z-[51] sticky top-0">
    <SideNavBar />
  </div>

  <!-- Main Content on page-->
  <div class="mx-3 sm:mt-2 sm:ml-72 sm:pb-16 sm:pl-16 sm:pr-6 block">
    <div class="flex justify-between items-center mb-8">

      <h1 class="text-4xl font-bold mt-6 ">Events</h1>

      <button class="bg-gradient-to-r from-[#f34439] to-[#ff8d07] text-white font-bold py-3 px-4 rounded-xl mt-7 transition-transform duration-300 ease-in-out hover:scale-110" on:click={navigateToCreateEvent}>
        Create Event
      </button>      
    </div>

    <div class="grid grid-cols-2 2xl:grid-cols-3 gap-8">
      <!-- Event cards-->
      {#each { length: 8 } as _, i}
        <Eventcard
          eventImage="/images/FoodAndDrinkDesignColour.svg"
          eventTitle="Food Lovers"
          eventDate="November 27th"
          eventLocation="Bibliotheek, Honney PIE Coffe, Middelburg"
        />
      {/each}
    </div>
  </div>

  <!-- Scrollbar -->
  <style>
    ::-webkit-scrollbar {
      height: 13px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: none;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(
        90deg,
        rgba(255, 231, 0, 1) 0%,
        rgba(255, 0, 0, 1) 100%
      );
      border-radius: 5px;
    }
    @media (min-width: 640px) {
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(
          0deg,
          rgba(255, 231, 0, 1) 0%,
          rgba(255, 0, 0, 1) 100%
        );
        border-radius: 5px;
      }

      ::-webkit-scrollbar {
        width: 6px;
      }
    }
    body {
      @media (min-width: 640px) {
        max-width: 100%;
        overflow-x: hidden;
      }
    }
  </style>
</main>
