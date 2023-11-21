<script>
  import Category from "./category.svelte";
  import Header from "./header.svelte";
  import Eventcard from "./eventcard.svelte";
</script>

<head>
  <!-- Include Font Awesome CSS -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
</head>

<body class="font-sans bg-[#F2F2F2]">
  <!-- Sidebar -->
  <aside
    class="fixed bg-[#D9D9D9] text-gray-200 h-screen flex flex-col drop-shadow-lg w-full sm:w-80"
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
    <ul class="m-5 flex flex-col items-center space-y-7">
      <Category icon="fas fa-futbol" text="Sports" />
      <Category icon="fas fa-music" text="Music" />
      <Category icon="fas fa-palette" text="Arts" />
      <Category icon="fas fa-puzzle-piece" text="Games" />
    </ul>
  </aside>

  <!-- Main Content on page-->
  <main class="ml-80 py-16 pl-16 pr-6">
    <h1 class="text-4xl font-bold mb-5">Events</h1>
    
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

  </main>

</body>
