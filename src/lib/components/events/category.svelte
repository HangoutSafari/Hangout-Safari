<script>
    import { onMount } from "svelte";
    import { lastClickedCategoryId, shouldShowAllEvents } from "../../../routes/events/store";

  export let id;
  export let icon;
  export let text;
  icon = icon + " mr-2"; // Add space inbetween icon and text

  onMount(()=>{
    const button = document.getElementById(id);
    button.addEventListener('click',changeState);
  });

  function changeState() {
    if ($lastClickedCategoryId == this.id){ 
      lastClickedCategoryId.set(0);
      shouldShowAllEvents.set(true); 
    }
    else {
      lastClickedCategoryId.set(this.id);
      shouldShowAllEvents.set(false);
    }
  }
</script>

<li>
  <button id={id}
    class="w-32 sm:w-64 sm:hover:w-72 duration-300 {(id == $lastClickedCategoryId) ? "bg-gradient-to-r from-[#F34439] to-[#FF8D07] text-white" : "bg-white"} ease-in-out h-12 flex bg-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg focus:outline-none focus:ring text-black hover:text-white font-bold pl-4 rounded-xl items-center">
    <i class={icon} />
    <span>{text}</span>
  </button>
</li>
