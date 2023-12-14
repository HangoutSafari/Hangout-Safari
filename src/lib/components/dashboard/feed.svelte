<script>
    export let profileImage;
    export let animalImage;
    export let locationObtained;
    export let dateObtained;
</script>

<div class="grid grid-flow-col items-center justify-items-center border-b border-slate-300 py-3 md:container md:mx-auto"> 
    <div>
        <img
        src={profileImage}
        alt="Profile Image"
        class="h-16 rounded-full">
    </div>
    
    <div class="flex flex-col">

    <p>Jhon Doe obtained Joe!</p>

        <div class="flex text-sm gap-4 content-around pt-1 text-black text-opacity-40">
            <div class="flex justify-items-start">
                <div class="flex">
                    <i class="mr-2 fa-solid fa-calendar" />
                    <p class="">{locationObtained}</p>
                </div>
            </div>
            <div class="flex justify-items-end">
                <div class="flex">
                    <i class=" mr-2 fa-solid fa-location-dot" />
                    <p class="">{dateObtained}</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <img
        src={animalImage}
            alt="Profile Image"
            class="h-12 bg-orange-400 rounded-lg p-1">
    </div>
</div>