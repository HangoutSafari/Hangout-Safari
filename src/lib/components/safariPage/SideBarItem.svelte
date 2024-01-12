<script>
    export let profileImage;
    export let animalImage;
    export let locationObtained;
    export let dateObtained;
</script>

<div
    class="flex flex-row justify-items-center shadow-lg p-2 md:container w-full lg:w-[90%] rounded-2xl bg-white"
>
    <div class="flex flex-col w-[130px] lg:w-[160px] h-[80px] lg:h-[100px]">
        <div />
        <img
            src="/images/modelImages/elephant.png"
            alt="Profile Image"
            class="h-12 bg-orange-400 rounded-lg p-1 h-full "
        />
    </div>
    <div class="hidden lg:flex flex-col ml-10 text-2xl text-gray-400">
        <h2>Name</h2>
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
    </div>
</div>
