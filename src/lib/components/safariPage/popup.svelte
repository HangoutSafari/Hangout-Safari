<script>
    export let name;
    export let rarity;
    export let achievedFrom;
</script>

<div class="inline-block">
    <div
      class="flex flex-col bg-gray-200 items-center content-center h-[14rem] lg:h-auto lg:w-[15rem] rounded-xl p-3 gap-1 font-Jaldi drop-shadow-lg"
    >
      <div class="flex items-center content-center gap-3">
        <p class="font-bold drop-shadow-md text-white text-[2rem] lg:text-2xl">{name}</p>
        <img class=" w-[1rem] lg:w-[12px] lg:h-[12px]" src="/images/edit.png" alt="" />
      </div>
      <img class="h-[5rem] lg:h-auto" src="/images/bunny.png" alt="" />
      <div class="flex flex-col gap-0 items-center">
        <p class=" mb-0 pb-0 font-bold text-[1rem] lg:text-base">Achieved from:</p>
        <p class=" pt-0 mt-0 text-[0.8em] lg:text-base">{achievedFrom}</p>
      </div>
      <p
        class="text-[1rem] lg:text-2xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#C51FFF] to-[#FF00E5]">
        {rarity}
      </p>
    </div>
  </div>

<!-- <div class="p-20 bg-slate-300 rounded-lg w-full">
 <p>Name <b> {name}</b></p>
 <p>Event <b> {achievedFrom} </b></p>
 <p>Rarity <b> {rarity} </b> </p>
</div> -->