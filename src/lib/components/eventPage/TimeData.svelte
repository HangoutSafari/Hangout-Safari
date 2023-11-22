<script>
    export let date = "27/11/2023";
    export let startTime = "12:00";
    export let endTime = "14:00";
</script>

<div class={`flex items-center justify-center gap-2 bg-white rounded-xl
    shadow-[0_2px_4px_rgba(117,106,106,0.8)]
    py-4 px-8 text-[#333] w-full
    ${$$props.class}`}>
    <div class="font-bold">{date}</div>
    <div class="separator w-[4px] h-full bg-[#ff4500] py-3"></div>
    <div class="font-bold">{startTime} - {endTime}</div>
</div>
