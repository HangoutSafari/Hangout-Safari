<script>
  import Header from "../events/header.svelte";
</script>

<main class="sm:h-full w-full">
  <!-- Sidebar -->
  <aside
    class="font-sans w-full sm:h-full mr-4 bg-[#D9D9D9] text-gray-200 flex flex-col drop-shadow-lg"
  >
    <div class="sticky top-20">
      <!-- Header name -->
      <Header text="Categories" class="hidden sm:inline-block"/>

      <!-- Search bar-->
      <label
        for="search"
        class="mx-5 my-3 sm:m-5 h-8 bg-[#BBBBBB] flex items-center rounded-xl focus-within:border-4 border-sky-400/30"
      >
        <i class="fas fa-search mx-2" />
        <input
          type="text"
          id="search"
          placeholder="Search..."
          class="outline-none border-none bg-transparent placeholder-gray-200"
        />
      </label>
    </div>
  </aside>
</main>
