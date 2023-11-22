<script>
  import Category from "./category.svelte";
  import Header from "./header.svelte";
  import Eventcard from "./eventcard.svelte";
</script>

<body class="font-sans bg-[#F2F2F2]">
  <!-- Sidebar -->
  <aside
    class="sm:fixed z-10 sticky top-0 bg-[#D9D9D9] text-gray-200 sm:h-full lg:flex flex-col drop-shadow-lg w-full sm:w-80"
  >
    <!-- Header name -->
    <Header text="Categories" />

    <!-- Search bar-->
    <label
      for="search"
      class="m-5 h-8 bg-[#BBBBBB] flex items-center rounded-xl focus-within:border-4 border-sky-400/30"
    >
      <i class="fas fa-search mx-2" />
      <input
        type="text"
        id="search"
        placeholder="Search..."
        class="outline-none border-none bg-transparent placeholder-gray-200"
      />
    </label>

    <!-- Event categories -->
    <ul
      class="pl-5 pb-3 sm:pl-0 flex overflow-x-auto gap-4 flex-row sm:flex-col sm:items-center sm:space-y-7 sm:gap-0"
    >
      <Category icon="fas fa-futbol" text="Sports" />
      <Category icon="fas fa-music" text="Music" />
      <Category icon="fas fa-palette" text="Arts" />
      <Category icon="fas fa-puzzle-piece" text="Games" />
    </ul>
  </aside>

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

  <!-- Main Content on page-->
  <div class="mx-3 sm:mx-0 sm:ml-80 sm:py-16 sm:pl-16 sm:pr-6 block">
    <h1 class="mt-4 sm:mt-0 text-4xl font-bold mb-5">Events</h1>

    <div class="grid grid-cols-2 gap-8">
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
</body>
