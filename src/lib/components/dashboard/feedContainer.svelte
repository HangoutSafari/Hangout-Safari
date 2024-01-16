<script>
  import Feed from "./feed.svelte";
</script>

<div class="flex justify-between rounded-t-2xl pt-4 px-12 text-2xl bg-white border-b border-slate-300">
  
  <div>
    <h1 class="pb-2 text-xl lg:text-2xl">Following</h1>
    <div class="h-1.5 bg-gradient-to-r from-yellow-400 to-red-500"></div>
  </div>

  <div>
    <h1 class=" text-xl lg:text-2xl">My Friends</h1>
    <div></div>
  </div>

</div>

<div class="bg-white p-4 rounded-b-2xl">

  <div>
      {#each { length: 6 } as _, i}
        <Feed 
        profileImage = "/images/customer.jpg"
        animalImage = "images/bunny.png"
        dateObtained = "1-12-2023"
        locationObtained = "Art Fair"
        />
      {/each}
  </div>
</div>
