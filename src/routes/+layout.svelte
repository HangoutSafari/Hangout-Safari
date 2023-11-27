<script>
  import "../app.css";
  import Navbar from "$lib/components/layout/navbar.svelte";
  ("../lib/components/layout/navbar.svelte");
</script>

<div class="background h-full">
  <div class="z-50 sticky top-0 bg-white-500">
    <Navbar />
  </div>
  <slot />
</div>

<style>
</style>
