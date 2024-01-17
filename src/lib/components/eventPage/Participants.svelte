<script>
  import { onMount } from "svelte";
  export let eventId = null;

  let participants = [];
  onMount(async () => {
    getParticipants(eventId);
    console.log(participants);
  });
  async function getParticipants(id) {
    const request = await fetch(
      `http://localhost:3010/events/free/${id}/participants`,
      {
        credentials: "include",
      }
    );
    participants = await request.json();
  }
</script>

<div
  class="bg-white rounded-2xl shadow-[0_4px_6px_rgba(117,106,106,0.8)] p-7 w-full h-full"
>
  {#each participants as participant}
    <div class="bg-[#f0f0f0] rounded-md flex items-center mb-2.5">
      <img
        class="w-10 h-10 rounded-full bg-blue-500 mr-2.5"
        src={participant.image_url}
        alt="{participant.username}'s profile picture"
      />
      <span class="text-sm font-bold text-gray-800">{participant.username}</span
      >
    </div>
  {/each}
</div>
