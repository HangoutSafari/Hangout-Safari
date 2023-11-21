<script>
  import Category from "./category.svelte";
  import Header from "./header.svelte";
</script>

<head>
  <!-- Include Font Awesome CSS -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
</head>

<body class="font-sans">
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
</body>
