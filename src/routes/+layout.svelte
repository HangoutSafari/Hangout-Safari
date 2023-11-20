<script>
  import "../app.css";
  import Navbar from "$lib/components/layout/navbar.svelte";
</script>
<body class="background w-full h-full justify-center overflow-x-hidden">
  <Navbar />

<main>
  <slot />
</main>

</body>
  
<style>
</style>
