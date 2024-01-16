<script>
  import Feed from "./feed.svelte";
  import { AnimalsModels } from "../../../Safari/Types/AnimalModelsPathTypes";

  export let users;

</script>

<div class="flex justify-center rounded-t-2xl pt-4 px-12 text-2xl bg-white border-b border-slate-300">
  
  <div>
    <h1 class="pb-2">Feed</h1>
    <div class="h-1.5 bg-gradient-to-r from-yellow-400 to-red-500"></div>
  </div>
</div>

<div class="bg-white p-4 rounded-b-2xl">

  <div>
      {#each users as user}
        <Feed 
        profileImage = "/images/profileImage.jpg"
        animalImage = {AnimalsModels[user.model_id].imagePath}
        dateObtained = {user.attended_at}
        locationObtained = {user.title}
        userName = {user.username}
        animalName = {user.animal_name}
        rarity = {AnimalsModels[user.model_id].rarity}
        />
      {/each}
  </div>
</div>
