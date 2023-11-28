<script>
    import Category from "./category.svelte";
    import Header from "./header.svelte";
  </script>
  
  <main class="font-sans bg-[#F2F2F2]">
    <!-- Sidebar -->
    <aside
      class="sm:fixed bg-[#D9D9D9] text-gray-200 sm:h-full lg:flex flex-col drop-shadow-lg w-full sm:w-80"
    >
      <!-- Header name -->
      <Header text="Categories" />
  
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
    </aside>
  
  </main>
  