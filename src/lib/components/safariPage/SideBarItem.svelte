<script>
    export let profileImage;
    export let animalImage;
    export let locationObtained;
    export let dateObtained;
</script>

<div
    class="flex flex-row justify-items-center border-b border-white p-3 md:container md:mx-auto bg-white"
>
    <div class="flex flex-col">
        <img
            src="/images/modelImages/crocodile.png"
            alt="Profile Image"
            class="h-12 bg-orange-400 rounded-lg p-1"
        />
        <div
            class="flex text-sm gap-4 content-around pt-1 text-black text-opacity-40"
        >
            <div class="flex justify-items-start">
                <div class="flex">
                    <i class="mr-2 fa-solid fa-calendar" />
                    <p class="">{dateObtained}</p>
                </div>
            </div>
        </div>
    </div>
    <div />
    <div class="hidden lg:flex ml-10 text-2xl text-gray-400">
        <h2>Name</h2>
    </div>
</div>
