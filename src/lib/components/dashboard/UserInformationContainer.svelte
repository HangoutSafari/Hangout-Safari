<script>
  import ProfileCard from "../profilePage/profileCard.svelte";
  import { AnimalsModels } from "../../../Safari/Types/AnimalModelsPathTypes";

  export let currentUser;
  let favoriteEvent = currentUser.category_icon;

  export let currentLatestAnimal;

  let animalsByDate = currentLatestAnimal.sort((a, b) => {
    return new Date(a.created_at) - new Date(b.created_at);
  });

  let createdDate = new Date(currentUser.created_at);
  let formattedDate = createdDate.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  console.log(formattedDate);
  console.log(currentUser.location);

  function delteCookies() {
    const cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
</script>

<div class="p-4 sm:p-0">
    <ProfileCard userName = {currentUser.username} animalCount = {currentUser.animals_gathered} profileImage = {currentUser.image_url}/>

    <div class="flex justify-center pt-3">

        <div class="bg-white w-full  rounded-xl drop-shadow-lg">
            <div class="flex justify-center">
                <div class="text-black text-opacity-70">
                    <div class="flex pt-4 text-lg lg:text-xl">
                        <i class="fa-solid fa-calendar w-6 h-6" /> <!-- Add a fixed width and height to the icon -->
                        <p class="pl-2">Joined {formattedDate}</p>
                    </div>
    
                    <div class="flex pt-4 text-lg lg:text-xl">
                        <i class="fa-solid fa-user-group w-6 h-6" /> <!-- Add a fixed width and height to the icon -->
                        <p class="pl-2">Events Attended: {currentUser.events_attended}</p>
                    </div>
                </div>
            </div>
            <div class="flex text-lg lg:text-xl pt-6 md:px-20 px-12">
                <h1 class="font-bold text-base mt-2 ml-2 pr-6">Favorite Category</h1>
                <div class="flex items-center text-white h-14 w-14 bg-orange-400 rounded-lg mr-2 p-2">
                    <i class="{favoriteEvent} fa-2xl"></i>
                </div>
            </div>

            <div class="flex pt-4 md:px-20 px-12">
                <h1 class="font-bold text-base mt-2 ml-2 pr-14">Latest Animal</h1>
                <div class="h-14 w-14 mr-2 scale-150">
                    {#if currentUser.count != 0}
                    <a href="/safari">

                    <img
                    src={AnimalsModels[animalsByDate[0].model_id].imagePath}
                    alt="Profile Image"
                    class="p-1">
                    </a>
                    {/if}
                </div>
            </div>

            <div class="lg:hidden flex justify-center w-full items-center  self-center  my-2">

                <a
                  on:click={delteCookies}
                  href="/login"
                  class=" text-white  bg-red-700 rounded-lg p-2 hover:scale-105 duration-100"
                >
                  Logout    
                </a>
                
            </div>
            
        </div>
      </div>

      <div class="flex justify-center pt-4">
        <h1 class="font-bold text-base mt-2 ml-2 pr-6">Latest Animal</h1>
        <div class="h-14 w-14 mr-2 scale-150">
          {#if currentUser.count != 0}
            <a href="/safari">
              <img
                src={AnimalsModels[animalsByDate[0].model_id].imagePath}
                alt="Profile Image"
                class="p-1"
              />
            </a>
          {/if}
        </div>
      </div>
      <div
        class="lg:hidden flex justify-center w-full items-center self-center my-2"
      >
        <a
          on:click={delteCookies}
          href="/login"
          class=" text-white bg-red-700 rounded-lg p-2 hover:scale-105 duration-100"
        >
          Logout
        </a>
      </div>
    </div>
  </div>
</div>
