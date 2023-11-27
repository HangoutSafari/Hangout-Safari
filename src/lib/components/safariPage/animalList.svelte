<script>
    import Category from "./animalButton.svelte";
    import Header from "$lib/components/events/header.svelte";
  import AnimalButton from "./animalButton.svelte";
  </script>
  
    <!-- Sidebar -->
    <aside
      class=" font-sans w-screen sm:h-full lg:w-64 lg:h-[500px] mr-4 z-10 bg-[#D9D9D9] text-gray-200 lg:flex flex flex-col drop-shadow-lg "
    >
      <!-- Header name -->
      <Header text="Animals" />
  
      <!-- Search bar-->
      <!-- <label
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
      </label> -->
  
      <!-- Event categories -->
      <div class="flex items-center overflow-x-auto lg:overflow-x-hidden overflow-y-auto flex-row lg:flex-col drop-shadow-lg gap-6">
        <AnimalButton/>
        <AnimalButton/>
        <AnimalButton/>
        <AnimalButton/>
        <AnimalButton/>
        <AnimalButton/>
        <AnimalButton/>
        <AnimalButton/>
        <AnimalButton/>
        <AnimalButton/>
      </div>
    </aside>