<script>
    import ProfileCard from "../profilePage/profileCard.svelte";

    function delteCookies(){
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
    <ProfileCard />

    <div class="flex-col flex justify-center items-center pt-3">

        <div class="bg-white w-full  rounded-xl drop-shadow-lg">
            <div class="flex justify-center">
                <div class="text-black ml text-opacity-70">
                    <div class="flex pt-4 text-lg lg:text-xl">
                        <i class="fa-solid fa-calendar w-6 h-6" /> <!-- Add a fixed width and height to the icon -->
                        <p class="pl-2 ">Joined March 6th</p>
                    </div>
    
                    <div class="flex pt-4 text-lg lg:text-xl">
                        <i class="fa-solid fa-location-dot w-6 h-6" /> <!-- Add a fixed width and height to the icon -->
                        <p class="pl-2">Location Sydney</p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center text-lg lg:text-xl pt-6">
                <h1 class="font-bold text-base mt-2 ml-2 pr-6">Favorite Events</h1>
                <div class="flex items-center text-white h-14 w-14 bg-orange-400 rounded-lg mr-2 p-2 ">
                    <i class="fa-solid fa-music fa-2xl"></i>
                </div>
            </div>

            <div class="flex justify-center pt-4">
                <h1 class="font-bold text-base mt-2  ml-2 pr-6">Favorite Animal</h1>
                <div class=" h-14 w-14 mr-2">
                    <img
                        src="/images/bunny.png"
                        alt="Profile Image"
                        class=" bg-orange-400 rounded-lg p-1">
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
    
</div>

