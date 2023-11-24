<script>
  import SideNavBar from "$lib/components/events/sidebar.svelte";
  import Eventcard from "$lib/components/events/eventcard.svelte";


  export let data;
  console.log(data);
</script>

<body>

  <div class="z-50 sticky top-0">
    <SideNavBar />
  </div>

  <!-- Main Content on page-->
  <div class="mx-3 sm:mx-0 sm:ml-72 sm:pb-16 sm:pl-16 sm:pr-6 block">
    <h1 class="mt-4 sm:mt-0 text-4xl font-bold mb-5">Events</h1>

    <div class="grid grid-cols-2 2xl:grid-cols-3 gap-8">
      <!-- Event cards-->
      <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
      />
      <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
      />
      <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
      />
      <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
      />
      <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
      />
      <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
      />
      <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
      />
      <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
      />
      <Eventcard
        eventImage="/zelda.jpeg"
        eventTitle="ART FAIR"
        eventDate="December 12th - 20th"
        eventLocation="Bibliotheek, Middelburg"
      />
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
          background: linear-gradient(90deg, rgba(255,231,0,1) 0%, rgba(255,0,0,1) 100%);
          border-radius: 5px;
      }
      @media (min-width: 640px) {
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(0deg, rgba(255,231,0,1) 0%, rgba(255,0,0,1) 100%);
          border-radius: 5px;
      }
  
      ::-webkit-scrollbar {
      width: 6px;
      }
  
      }
      body {
        @media (min-width: 640px){
          max-width: 100%;
          overflow-x: hidden;
        }
      }
  
    </style>
</body>
