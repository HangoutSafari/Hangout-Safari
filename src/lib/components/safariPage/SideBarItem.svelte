<script lang="ts">
    import {createEventDispatcher} from 'svelte'

    export let animalImage: string;
    export let locationObtained: string;
    export let dateObtained: string;
    export let rarity: string;
    export let name: string;

    const dispatcher = createEventDispatcher();

    function sideBarItemClicked(){
        dispatcher("sideBarItemClicked",{
            name: name,
            achievedFrom: locationObtained,
            image: animalImage,
            rarity: rarity
        });
    }
</script>

<button
    class="flex flex-row justify-items-center shadow-lg p-2 md:container w-full lg:w-[90%] rounded-2xl bg-white hover:scale-110 duration-150 hover:cursor-grab"
    on:click={sideBarItemClicked}
    >
    <div class="flex flex-col w-[120px] lg:w-[160px] h-[80px] lg:h-[100px] shadow-lg">
        <div />
        <img
            src="{animalImage}"
            alt="Profile Image"
            class="w-full bg-orange-400 rounded-lg p-1 h-full align-bottom"
        />
    </div>
    <div class="hidden lg:flex flex-col ml-10 ">
        <h2 class="text-2xl text-gray-400">{name}</h2>
        <div
            class="flex text-sm gap-2 content-around pt-1 text-black text-opacity-40"
        >
            <div class="flex justify-items-start">
                <div class="flex">
                    <i class="mr-2 fa-solid fa-calendar" />
                    <p class="">{dateObtained}</p>
                </div>
            </div>
        </div>
        <div class="flex text-sm gap-2 content-around pt-1 text-black text-opacity-40">
            <div class="flex justify-items-end">
                <div class="flex">
                    <i class=" mr-2 fa-solid fa-location-dot" />
                    <p>{locationObtained}</p>
                </div>
            </div>
        </div>

    </div>
</button>
