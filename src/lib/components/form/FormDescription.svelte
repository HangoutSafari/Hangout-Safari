<script>
  export let value = "Description...";
</script>

<div class="{$$props.class} w-full">
  <i
    class="fa-solid fa-pen absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"
  />
  <textarea
    id="description"
    rows="4"
    class="w-full px-7 py-2 outline-none ring ring-orange-400"
  >
    {value}
  </textarea>
</div>
