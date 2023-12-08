<script>
  import Feed from "./feed.svelte";
</script>

<div class="bg-white drop-shadow-lg p-4">
  <div class="">
      {#each { length: 1 } as _, i}
        <Feed 
        profileImage = "/images/customer.jpg"
        animalImage = "images/bunny.png"
        />
      {/each}
  </div>
</div>
