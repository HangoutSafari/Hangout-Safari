<script>
  export let icon;
  export let text;
  icon = icon + " mr-2"; // Add space inbetween icon and text
</script>

<li>
  <button
    class="w-32 sm:w-64 sm:hover:w-72 duration-300 ease-in-out h-12 flex bg-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg focus:outline-none focus:ring text-black hover:text-white font-bold pl-4 rounded-xl items-center"
  >
    <i class={icon} />
    <span>{text}</span>
  </button>
</li>
