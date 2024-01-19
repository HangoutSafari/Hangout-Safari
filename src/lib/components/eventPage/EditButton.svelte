<script>
  import { goto } from "$app/navigation";

  export let eventId;
</script>

<a
  href="/events/{eventId}/edit"
  class=" text-white mr-2 bg-gradient-to-r from-[#f34439] to-[#ff8d07] shadow-lg rounded-xl px-7 py-2 md:px-10 md:py-3 font-bold text-xl mb-1 md:mb-3 cursor-pointer"
>
  EDIT
</a>
