<script>
  import Register from "$lib/components/register/register.svelte";
  import Circle from "$lib/components/login/circle.svelte";
</script>
<body class="background w-full h-full justify-center overflow-x-hidden">
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="">
      <Circle />
    </div>
    <div class="absolute z-10">
      <Register />
    </div>
    <Customer/>
  </div>
</body>