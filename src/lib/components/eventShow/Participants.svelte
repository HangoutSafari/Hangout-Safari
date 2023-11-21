<script>
    let participants = [
        { name: 'Amy Johnson' },
        { name: 'Amy Johnson' },
        { name: 'Amy Johnson' },
        { name: 'Amy Johnson' },
        { name: 'Amy Johnson' },
    ];
</script>

<div class="participants-container">
    {#each participants as participant}
        <div class="participant">
            <div class="avatar"></div>
            <span class="name">{participant.name}</span>
        </div>
    {/each}
</div>

<style>
    .participants-container
    {
        background-color: #ffffff;
        border-radius: 20px;
        box-shadow: 0 2px 4px rgba(117, 106, 106, 0.8);
        padding: 30px;
        width: 100%;
    }

    .participant
    {
        background-color: #f0f0f0;
        border-radius: 15px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .avatar {
        border-radius: 50%; 
        background-color: #007bff; 
        margin-right: 10px;
        width: 40px;
        height: 40px; 
        display: inline-block; 
    }

    .name {
        font-size: 15px;
        font-weight: bold; 
        color: #333;
    }
</style>
