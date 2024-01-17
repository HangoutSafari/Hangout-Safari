<script>
  import "../app.css";
  import {page} from "$app/stores"
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

<div class="h-[100vh]">
    <div class="z-50 sm:sticky top-0 bg-white-500"></div>

  <div class="background h-full">
{#if !($page.url.pathname == "/login" || $page.url.pathname == "/register")}  
<div class="z-50 sticky top-0 bg-white-500">
  <Navbar />
</div>
{/if}
    <slot />
  </div>
</div>

<style>
</style>
