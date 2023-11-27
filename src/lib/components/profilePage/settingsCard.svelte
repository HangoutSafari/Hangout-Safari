<script>
  import { onMount } from "svelte";

  let checkbox1;
  let icon1;
  let checkbox2;
  let icon2;
  onMount(() => {
    checkbox1.onchange = function () {
      if (icon1.className == "fa-solid fa-check fa-2xs absolute right-6")
        icon1.className = "";
      else icon1.className = "fa-solid fa-check fa-2xs absolute right-6";
    };
    checkbox2.onchange = function () {
      if (icon2.className == "fa-solid fa-check fa-2xs absolute right-6")
        icon2.className = "";
      else icon2.className = "fa-solid fa-check fa-2xs absolute right-6";
    };
  });
</script>

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  rel="stylesheet"
/>

<div
  class=" rounded-2xl lg:rounded-none relative safari-bg flex w-full h-full lg:w-[25rem] lg:h-[22rem] drop-shadow-2xl p-0 m-0 bg-white lg:bg-transparent"
>
  <div class="absolute inset-0 overflow-hidden rounded-xl">
    <img
      class=" hidden lg:block w-full h-full object-cover object-center blur-[8px] brightness-75"
      src="/images/profileBg.png"
      alt="Safari Background"
    />
  </div>
  <div
    class="w-full z-10 lg:text-white mt-5 justify-self-center mx-5 text-[1.6rem] lg:text-2xl"
  >
    <div class=" flow-root">
      <h1 class=" float-left font-bold">Anti-aliasing</h1>
      <input
        bind:this={checkbox1}
        id="aA"
        class="hidden peer"
        type="checkbox"
      />
      <label
        id="label"
        for="aA"
        class="float-right w-[1rem] h-[1rem] lg:w-auto p-2 font-medium tracking-tight lg:h-2 cursor-pointer bg-brand-light text-brand-black border-black lg:border-white border-[3px] peer-checked:border-gray-100 lg:peer-checked:bg-black"
      >
        <i bind:this={icon1} class="" style="color: #ffffff;" />
      </label>
    </div>
    <hr class="my-5" />
    <div class=" flow-root">
      <h1 class=" float-left font-bold">Allow rotation</h1>
      <input
        bind:this={checkbox2}
        id="aR"
        class="hidden peer"
        type="checkbox"
      />
      <label
        id="label"
        for="aR"
        class="float-right w-[1rem] h-[1rem] lg:w-auto p-2 font-medium tracking-tight lg:h-2 cursor-pointer bg-brand-light text-brand-black border-black lg:border-white border-[3px] peer-checked:border-gray-100 lg:peer-checked:bg-black"
      >
        <i bind:this={icon2} class="" style="color: #ffffff;" />
      </label>
    </div>
  </div>
</div>
