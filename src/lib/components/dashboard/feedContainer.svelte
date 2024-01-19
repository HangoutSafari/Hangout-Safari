<script>
  import Feed from "./feed.svelte";
  import { AnimalsModels } from "../../../Safari/Types/AnimalModelsPathTypes";

  export let users;
  export let currentuser;

  users = users.filter((user) => user.username != currentuser.username);
  console.log(users);
</script>

<div
  class="flex justify-center rounded-t-2xl pt-4 px-12 text-2xl bg-white border-b border-slate-300"
>
  <div>
    <h1 class="pb-2 text-xl lg:text-2xl">Feed</h1>
    <div class="h-1.5 bg-gradient-to-r from-yellow-400 to-red-500" />
  </div>
</div>

<div class="sm:h-[566px] bg-white p-4 rounded-b-2xl">
  <div>
    {#each { length: 6 } as _, i}
      <Feed
        profileImage="/images/profileImage.jpg"
        animalImage={AnimalsModels[users[i].model_id].imagePath}
        dateObtained={users[i].attended_at}
        locationObtained={users[i].title}
        userName={users[i].username}
        animalName={users[i].animal_name}
        rarity={AnimalsModels[users[i].model_id].rarity}
      />
    {/each}
  </div>
</div>
