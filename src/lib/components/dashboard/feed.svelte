<script>
  import { AnimalsModels } from "../../../Safari/Types/AnimalModelsPathTypes";

    export let profileImage;
    export let animalImage;
    export let locationObtained;
    export let dateObtained;
    export let userName;
    export let animalName;
    let trunkatedUserName=userName;
    // console.log(userName.length)
    if(userName.length>=7){
       trunkatedUserName = userName.substring(0,6) + "..."
    }

    let createdDate = new Date(dateObtained);
    dateObtained = createdDate.toLocaleDateString("nl-NL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    export let rarity;

    let textColor = "";

    switch (rarity) {
        case "common":
            // black
            textColor = "bg-gray-400";
            break;
        case "epic":
            // purple
            textColor = "bg-gradient-to-br from-[#C51FFF] to-[#FF00E5]";
            break;
        case "uncommon":
            // green
            textColor =  "bg-gradient-to-br from-[#0ee006] to-[#28ff5e]";
            break;
        case "rare":
            // blue
            textColor = "bg-gradient-to-br from-[#04daeb] to-[#0eb6d1]";
            break;
        default:
            // Handle cases where rarity is not one of the expected values
            textColor = "bg-black"; // Replace with your default color
            break;
    }

</script>

<div
    class="grid grid-flow-col items-center justify-items-center border-b border-slate-300 py-3 md:container md:mx-auto"
>
    <div class="pr-2">
        <img src={profileImage} alt="Profile Image" class="h-16 rounded-full" />
    </div>

    <div class="flex flex-col">
        <div class="flex flex-col">
            <div>
                <span class="font-bold">{trunkatedUserName}</span> 
        
            <span>obtained</span>
            
                <span class="{textColor} font-extrabold inline-block text-transparent bg-clip-text">{animalName}</span>
            </div>
        </div>

        <div class="flex text-sm gap-4 content-around pt-1 text-black text-opacity-40">
            <div class="flex justify-items-start">
                <div class="flex w-20">
                    <i class="mr-2 fa-solid fa-location-dot" />
                    <p class="truncate">{locationObtained}</p>
                </div>
            </div>

            <div class="flex justify-items-end">
                <div class="flex">
                    <i class="mr-2 fa-solid fa-calendar" />
                    <p class="">{dateObtained}</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="w-20 scale-100">
            <img
                src={animalImage}
                alt="Profile Image"
                class="h-12 rounded-lg w-full h-full"
            />
        </div>
    </div>
</div>

<style></style>
