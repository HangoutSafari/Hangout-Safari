<script>
  import { onMount } from "svelte";
  // data is the data from the page.server.js
  // export let data;
  // console.log(data);
  onMount(getSession);
  async function getSession() {
    const request = await fetch("http://localhost:3010/auth/session", {
      credentials: "include",
    });
    const response = await request.json();
    return { message: `data from the server ${response}` };
  }
</script>

<div>
  <h1>Nice example of an very simple component</h1>
  <!-- <p>{data.message}</p> -->
</div>
