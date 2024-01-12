<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  // data is the data from the page.server.js
  // export let data;
  // console.log(data);
  onMount(async () => {
    console.log(await getSession());
    console.log(await getAnimals());
  });
  async function getSession() {
    const request = await fetch("http://localhost:3010/auth/session", {
      credentials: "include",
    });
    const response = await request.json();
    return response;
  }
  async function getAnimals() {
    const request = await fetch("http://localhost:3010/animals/auth", {
      credentials: "include",
    });
    const response = await request.json();
    return response;
  }
</script>

<div>
  <h1>Nice example of an very simple component</h1>
  <!-- <p>{data.message}</p> -->
</div>
