<script>
  import "../app.css";
  import Navbar from "$lib/components/layout/navbar.svelte"; "../lib/components/layout/navbar.svelte";
</script>
<head>
  <!-- Include Font Awesome CSS -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
/>
</head>
<body>
  <Navbar />
  <slot />
</body>

<style>
</style>
