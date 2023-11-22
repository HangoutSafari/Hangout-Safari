<script>
    let participants = [
        { name: 'Amy Johnson' },
        { name: 'Amy Johnson' },
        { name: 'Amy Johnson' },
        { name: 'Amy Johnson' },
        { name: 'Amy Johnson' },
    ];
</script>

<div class="participants-container bg-white rounded-2xl shadow-[0_4px_6px_rgba(117,106,106,0.8)] p-7 w-full h-full">
    {#each participants as participant}
        <div class="participant bg-[#f0f0f0] rounded-md flex items-center mb-2.5">
            <div class="avatar w-10 h-10 rounded-full bg-blue-500 mr-2.5"></div>
            <span class="name text-sm font-bold text-gray-800">{participant.name}</span>
        </div>
    {/each}
</div>
