<script>
    import ProfileCard from "../profilePage/profileCard.svelte";
</script>

<div class="p-4 sm:p-0">
    <ProfileCard />

    <div class="flex justify-center pt-3">

        <div class="bg-white w-2/3 h-60 rounded-xl drop-shadow-lg">

            <div class="flex justify-center">
                <div class="text-black text-opacity-70">
                    <div class="flex pt-4">
                        <i class="fa-solid fa-calendar w-6 h-6" /> <!-- Add a fixed width and height to the icon -->
                        <p class="pl-2">Joined March 6th</p>
                    </div>
    
                    <div class="flex pt-4">
                        <i class="fa-solid fa-location-dot w-6 h-6" /> <!-- Add a fixed width and height to the icon -->
                        <p class="pl-2">Location Sydney</p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center pt-6">
                <h1 class="font-bold text-base pr-6">Favorite Events</h1>
                <div class="flex items-center text-white h-12 w-12 bg-orange-400 rounded-lg p-1">
                    <i class="fa-solid fa-music fa-2xl"></i>
                </div>
            </div>

            <div class="flex justify-center pt-4">
                <h1 class="font-bold text-base pr-6">Favorite Animal</h1>
                <div class="h-12 w-12">
                    <img
                        src="/images/bunny.png"
                        alt="Profile Image"
                        class=" bg-orange-400 rounded-lg p-1">
                </div>
            </div>

        </div>

    </div>

</div>

