<script>
    import ProfileCard from "../profilePage/profileCard.svelte";
</script>

<div class="p-4 sm:p-0">
    <ProfileCard />

    <div class="flex justify-center pt-3">

        <div class="bg-white w-full h-60 rounded-xl drop-shadow-lg">
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

        </div>

    </div>

</div>

