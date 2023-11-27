<script>
  import "../app.css";
  import Navbar from "$lib/components/layout/navbar.svelte";
  ("../lib/components/layout/navbar.svelte");
</script>

<head>
  <!-- Include Font Awesome CSS -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
/>
</head>
<div>
  <div class="z-50 sm:sticky top-0 bg-white-500"></div>
<div class="background">


<div class="background h-full">

  <div class="z-50 sticky top-0 bg-white-500">
    <Navbar />
  </div>
  <slot />
</div>

<style>
</style>
