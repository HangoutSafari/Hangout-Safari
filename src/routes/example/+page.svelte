<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  // data is the data from the page.server.js

 export let data;

 onMount(async () => {
    console.log(data);
  });
  // async function getSession() {
  //   const request = await fetch("http://apigateway:3010/auth/session", {
  //     credentials: "include",
  //   });
  //   const response = await request.json();
  //   return response;
  // }
  // async function getEvents() {
  //   const request = await fetch("http://apigateway:3010/animals/auth/full", {
  //     credentials: "include",
  //   });
  //   const response = await request.json();
  //   return response;
  // }
  // async function getChosenEvent(id) {
  //   const request = await fetch(
  //     `http://apigateway:3010/events/free/15/participants`,
  //     {
  //       credentials: "include",
  //     }
  //   );
  //   const response = await request.json();
  //   return response;
  // }
  // async function postEvent() {
  //   const postData = {
  //     category_id: 3,
  //     title: "Trying posting s events",
  //     host_id: "71e2b448-211d-4f58-81a9-3c3efc8f856d",
  //   };
  //   const request = await fetch(`http://apigateway:3010/events/auth/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(postData),
  //     credentials: "include",
  //   });
  //   const response = await request.json();
  //   return response;
  // }

  // async function editEvent() {
  //   const editData = {
  //     category_id: 1,
  //     title: "Trying editing events",
  //   };
  //   const request = await fetch(`http://apigateway:3010/events/auth/6`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(editData),
  //     credentials: "include",
  //   });
  //   const response = await request.json();
  //   return response;
  // }

  // async function deleteEvent() {
  //   const request = await fetch(`http://apigateway:3010/events/auth/6`, {
  //     method: "DELETE",
  //     credentials: "include",
  //   });
  //   const response = await request.json();
  //   return response;
  // }
</script>

<div>
  <h1>Nice example of an very simple component</h1>
  <!-- <p>{data.message}</p> -->
  <!-- <button class="py-2 px-4 bg-white border-2" on:click={postEvent}>POST</button>
  <button class="py-2 px-4 bg-white border-2" on:click={editEvent}>EDIT</button>
  <button class="py-2 px-4 bg-white border-2" on:click={deleteEvent}
    >DELETE</button -->
  <!-- > -->
</div>
