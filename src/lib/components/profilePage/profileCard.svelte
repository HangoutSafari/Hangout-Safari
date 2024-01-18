<script>
  export let userName;
  export let animalCount;

  export let profileImage;

</script>

<div
  class="relative safari-bg flex w-full lg:w-[25rem] lg:h-[22rem] drop-shadow-2xl p-16 sm:p-24 md:p-6 lg:p-0 mt-2 md:mt-0">
  <div class="absolute inset-0 overflow-hidden rounded-xl">
    <img
      class="w-full h-full object-cover object-center blur-[8px] brightness-75"
      src="/images/profileBg.png"
      alt="Safari Background"
    />
  </div>
  <div
    class="w-full z-10 text-white text-center content-center self-center justify-self-center">
    <img
      class="w-auto h-[10rem] lg:h-[15rem] lg:w-[15rem] mt-4 rounded-full mx-auto lg:mt-[-1rem] mb-5"
      src="{profileImage== null ? "/images/placeholderImage.jpg" : profileImage}"
      alt=""
    />
    <!-- Your content goes here -->
    <h1 class="text-[2rem] font-bold">{userName}</h1>
    <p
      class="font-bold text-[1.5rem] lg:text-[1rem] mt-7 lg:mt-2 mb-3 lg:mb-auto">
      Animal count: {animalCount}
    </p>
    <!-- More content if needed -->
  </div>
</div>
