<script>
  import Login from "$lib/components/login/login.svelte";
  import Circle from "$lib/components/login/circle.svelte";
  import Navbar from "$lib/components/layout/navbar.svelte";
</script>

<body class="background w-full h-full justify-center overflow-x-hidden">
  <Navbar />
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="">
      <Circle />
    </div>
    <div class="absolute z-10">
      <Login />
    </div>
  </div>
</body>
