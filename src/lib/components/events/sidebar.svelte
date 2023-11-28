<script>
  import Category from "./category.svelte";
  import Header from "./header.svelte";
  import Eventcard from "./eventcard.svelte";

  export let header;
</script>

<main class="sm:h-full w-full mt-4 lg:mt-0">
  <!-- Sidebar -->
  <aside
    class="font-sans w-full sm:h-full mr-4 bg-[#D9D9D9] text-gray-200 flex flex-col drop-shadow-lg"
  >
    <div class="sticky top-20">
      <!-- Header name -->
      <Header text={header} />

      <!-- Search bar-->
      <label
        for="search"
        class=" hidden lg:flex mx-5 my-3 sm:m-5 h-8 bg-[#BBBBBB] items-center rounded-xl focus-within:border-4 border-sky-400/30"
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
        class="pl-5 m-2 lg:m-0 sm:pl-0 flex overflow-x-auto gap-4 flex-row sm:flex-col sm:items-center sm:space-y-7 sm:gap-0"
      >
        <Category icon="fas fa-futbol" text="Sports" />
        <Category icon="fas fa-music" text="Music" />
        <Category icon="fas fa-palette" text="Arts" />
        <Category icon="fas fa-puzzle-piece" text="Games" />
      </ul>
    </div>
  </aside>
</main>
