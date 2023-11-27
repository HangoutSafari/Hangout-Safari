<script>
    export let icon;
    export let text;
    icon = icon + " mr-2"; // Add space inbetween icon and text
</script>

<button
    class="w-32 hover:w-52 p-5 duration-300 ease-in-out flex bg-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg focus:outline-none focus:ring text-black hover:text-white font-bold pl-4 rounded-xl items-center"
  >
    <p>{text}</p>
</button>