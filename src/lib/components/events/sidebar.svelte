<script>
  import { setInputToStore } from "../../../routes/events/search";
  import {
    lastClickedCategoryId,
    shouldShowAllEvents,
    textOfSearchField,
  } from "../../../routes/events/store";
  import Category from "./category.svelte";
  import Header from "./header.svelte";

  export let categories;
  let searchTerm = $textOfSearchField;

  function resetAndShowEvent() {
    lastClickedCategoryId.set(0);
    shouldShowAllEvents.set(true);
  }
</script>

<main class="font-sans bg-[#F2F2F2]">
  <!-- Sidebar -->
  <aside
    class="sm:fixed bg-[#D9D9D9] text-gray-200 sm:h-full lg:flex flex-col drop-shadow-lg w-full sm:w-80"
  >
    <!-- Header name -->
    <Header text="Categories" />

    <button
      on:click={resetAndShowEvent}
      class="text-gray-500 pl-5 m-2 lg:m-0 sm:pl-10 flex overflow-x-auto gap-4 flex-row sm:items-right sm:space-y-7 sm:gap-0"
      >Show All</button
    >

    <!-- Search bar-->
    <label
      for="search"
      class=" hidden lg:flex mx-5 my-3 sm:m-5 h-8 bg-[#BBBBBB] items-center rounded-xl focus-within:border-4 border-sky-400/30"
    >
      <i class="fas fa-search mx-2" />
      <input
        bind:value={searchTerm}
        on:input={(event) => setInputToStore(event, searchTerm)}
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
      {#each categories as category}
        <Category
          icon={category.category_icon}
          text={category.category_name}
          id={category.id}
        />
      {/each}
    </ul>
  </aside>
</main>
